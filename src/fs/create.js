import { writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const newFilePath = join(__dirname, 'files', 'fresh.txt');

const create = async () => {
    try {
        await writeFile(newFilePath, 'I am fresh and young', { flag: 'wx' });
    } catch (error) {
        throw Error('FS operation failed');
    }
};

await create();