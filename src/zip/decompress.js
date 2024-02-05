import { createGunzip } from 'zlib';
import { resolve } from 'path';
import { createReadStream, createWriteStream } from 'fs';

const sourcePath = resolve('src', 'zip', 'files', 'archive.gz');
const destinationPath = resolve('src', 'zip', 'files', 'fileToCompress.txt');

const decompress = async () => {
    createReadStream(sourcePath)
        .pipe(createGunzip())
        .pipe(createWriteStream(destinationPath)); 
};

await decompress();