const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

/**
 * Returns the absolute path to the "dist" directory relative to the current file.
 * @returns {string} - The absolute path to the "dist" directory.
 */
const distDir = path.join(__dirname, "../dist");

/**
 * Recursively searches for JavaScript files in a given directory and its subdirectories.
 * @param {string} dir - The directory to search in.
 * @param {string[]} [fileList=[]] - An optional array to store the found file paths.
 * @returns {string[]} An array of file paths for JavaScript files found in the directory and its subdirectories.
 */
function findJsFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);

    // Checks if the given file path is a directory.
    if (fs.statSync(filePath).isDirectory()) {
      findJsFiles(filePath, fileList);
    }
    // Checks if the given file path ends with the ".js" extension.
    else if (file.endsWith(".js")) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

try {
  const jsFiles = findJsFiles(distDir);

  // Log each JS file found
  jsFiles.forEach((file) => {
    console.log("Found JS file:", file);
  });

  const fileArgs = jsFiles.map((file) => `"${file}"`).join(" ");

  // Executes the source-map-explorer command with the given file arguments.
  execSync(`npx source-map-explorer ${fileArgs}`, { stdio: "inherit" });
} catch (err) {
  console.error("Error:", err);
}
