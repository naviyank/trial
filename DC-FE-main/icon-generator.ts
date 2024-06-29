const fs = require("fs");
const path = require("path");

const ASSETS_DIR = `${process.cwd()}/src/app/assets`;
const ICONS_DIR = `${ASSETS_DIR}/svgs`;
const PATH_REGEX = /d="(.*)" /;
const icons: Record<string, any> = {};

/**
 * Generates icon objects with keyname and svg paths
 */
const generateIconPaths = async () => {
  let files = await fs.promises.readdir(path.resolve(ICONS_DIR));
  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    let svgFile = await fs.promises.readFile(
      path.resolve(`${ICONS_DIR}/${file}`)
    );
    let keyName = file.replace(".svg", "");
    let result = PATH_REGEX.exec(svgFile) || [];
    icons[keyName] = result.slice(1)[0];
  }
};

const exportIconPaths = async () => {
  await generateIconPaths();

  // Write to FS
  const ICONS_FILE_PATH = `${ASSETS_DIR}/icons.json`;
  await fs.promises.writeFile(ICONS_FILE_PATH, JSON.stringify(icons), "utf-8");
};

exportIconPaths().then(() => {
  console.log("Icons exported successfully");
});
