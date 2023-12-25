const fs = require("fs");
const path = require("path");

// Set the path to the components directory and the package.json file.
const componentsDir = path.join(__dirname, "../../src", "components");
const packageJsonPath = path.join(__dirname, "../../package.json");

/**
 * Updates the "exports" field in the package.json file to include the correct paths for
 * exporting components and styles. This function reads the components directory,
 * constructs the exports object, and writes it to the package.json.
 */
function updatePackageExports() {
  // Read the components directory.
  fs.readdir(componentsDir, (err, files) => {
    if (err) {
      console.error("Error reading components directory:", err);
      return;
    }

    // Initialize the exports field with base entries.
    const exportsField = {
      ".": {
        types: "./dist/index.d.ts",
        import: "./dist/index.mjs",
        require: "./dist/index.js",
      },
      "./styles.css": "./dist/styles.css",
    };

    // Iterate over each file/directory in the components directory.
    files.forEach((file) => {
      // Skip .DS_Store files (common in macOS).
      if (file === ".DS_Store") return;

      // Construct the path for each component's exports.
      const componentPath = `./${file}`;
      exportsField[componentPath] = {
        types: `./dist/components/${file}/index.d.ts`,
        import: `./dist/components/${file}/index.mjs`,
        require: `./dist/components/${file}/index.js`,
      };
    });

    // Load the existing package.json file.
    const packageJson = require(packageJsonPath);

    // Update the exports field in the package.json object.
    packageJson.exports = exportsField;

    // Convert the package.json object to a string, adding a newline at the end.
    const packageJsonString = JSON.stringify(packageJson, null, 2) + "\n";

    // Write the updated package.json string back to the package.json file.
    fs.writeFile(packageJsonPath, packageJsonString, (err) => {
      if (err) {
        console.error("Error writing package.json:", err);
        return;
      }
      console.log("package.json updated successfully.");
    });
  });
}

// Export the function for use in other scripts.
module.exports = updatePackageExports;
