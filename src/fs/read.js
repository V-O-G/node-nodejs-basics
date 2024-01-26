import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        console.log(await readFile(filePath, { encoding: 'utf8' }));
    } catch (error) {
        throw Error('FS operation failed');
    }
};

await read();