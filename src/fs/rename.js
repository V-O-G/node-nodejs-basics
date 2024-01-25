import { access, rename as renameFs } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const oldPath = join(__dirname, 'files', 'wrongFilename.txt');
const newPath = join(__dirname, 'files', 'properFilename.md');

const fileExists = async (path) => {  
    try {
      await access(path);
      return true;
    } catch (error) {
        return false;
    }
  }

const rename = async () => {
     try {
        if (await fileExists(newPath) || !await fileExists(oldPath)) {
            throw Error;
        } else {
            await renameFs(oldPath, newPath);
        }
     } catch (error) {
        throw Error('FS operation failed');
     }
};

await rename();