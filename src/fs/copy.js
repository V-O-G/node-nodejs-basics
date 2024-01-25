import { access, cp } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourcePath = join(__dirname, 'files');
const destinationPath = join(__dirname, 'files_copy');

const copy = async () => {
    try {
        await access(sourcePath);
        await cp(sourcePath, destinationPath, {
            errorOnExist: true,
            force: false,
            recursive: true,
        });
    } catch (error) {
        throw Error('FS operation failed');
    }
};

await copy();
