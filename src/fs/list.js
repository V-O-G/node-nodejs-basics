import { readdir } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const folderPath = join(__dirname, 'files');

const list = async () => {
    try {
        console.log(await readdir(folderPath));
    } catch (error) {
        throw Error('FS operation failed');
    }  
};

await list();