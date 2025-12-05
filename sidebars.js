const fs = require("fs");

const docsDir = "./docs";

const entityFiles = fs
  .readdirSync(docsDir)
  // Only pick .md files
  .filter(f => f.endsWith(".md"))
  // Remove intro.md
  .filter(f => f !== "intro.md")
  // Ignore hidden files (macOS .DS_Store etc.)
  .filter(f => !f.startsWith("."))
  // Convert filenames to ids safely
  .map(f => f.replace(".md", "").trim())
  // Remove any empty names
  .filter(Boolean)
  // Sort alphabetically
  .sort();

module.exports = {
  apiSidebar: [
    "intro",
    {
      type: "category",
      label: "Entities",
      items: entityFiles
    }
  ]
};