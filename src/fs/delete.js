import { rm } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    try {
        await rm(filePath);
    } catch (error) {
        throw Error('FS operation failed');
    }
};

await remove();