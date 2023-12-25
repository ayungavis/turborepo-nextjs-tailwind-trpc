const fs = require("fs");
const path = require("path");
const { exec, spawn } = require("child_process");
const updatePackageExports = require("./functions/updatePackageExports");

// Define the path to the components directory.
const componentsDir = path.join(__dirname, "../src", "components");

// Variable to hold the tsup process.
let tsupProcess;

/**
 * Starts or restarts the tsup process in watch mode.
 */
function startTsupWatch() {
  // If tsupProcess is already running, kill it to restart.
  if (tsupProcess) {
    tsupProcess.kill();
  }

  // Start tsup in watch mode and pipe output to parent process.
  tsupProcess = spawn("tsup", ["--watch"], { stdio: "inherit" });

  // Log when the tsup process exits.
  tsupProcess.on("close", (code) => {
    console.log(`tsup process exited with code ${code}`);
  });
}

// Initial start of the tsup watch process.
startTsupWatch();

// Watch for changes in the components directory.
fs.watch(componentsDir, { recursive: true }, (eventType, filename) => {
  if (filename) {
    // Log the file change and update package exports.
    console.log(`Detected change in ${filename}. Updating exports...`);
    updatePackageExports();

    // If the change type is 'rename', it might indicate new files or directories.
    // Restart the tsup watch process to pick up these new files.
    if (eventType === "rename") {
      startTsupWatch();
    }
  }
});

// Ensure the tsup process is killed when the script exits.
process.on("exit", () => {
  if (tsupProcess) {
    tsupProcess.kill();
  }
});
