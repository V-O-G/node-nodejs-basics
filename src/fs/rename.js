import { access, rename as renameFs } from 'fs/promises';
import { generatePathToFiles } from './helpers/path.js';
import { tryAction } from './helpers/common.js';

const oldPath = generatePathToFiles('wrongFilename.txt');
const newPath = generatePathToFiles('properFilename.md');

const fileExists = async (path) => {  
    try {
      await access(path);
      return true;
    } catch (error) {
        return false;
    }
  }

const rename = async () => {
  async function actionRename() {
    if (await fileExists(newPath) || !await fileExists(oldPath)) {
      throw Error;
    } else {
        await renameFs(oldPath, newPath);
    }
  }
  await tryAction(actionRename);
};

await rename();