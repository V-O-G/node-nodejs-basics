import { createGzip } from 'zlib';
import { resolve } from 'path';
import { createReadStream, createWriteStream } from 'fs';

const sourcePath = resolve('src', 'zip', 'files', 'fileToCompress.txt');
const destinationPath = resolve('src', 'zip', 'files', 'archive.gz');

const compress = async () => {
    createReadStream(sourcePath)
        .pipe(createGzip())
        .pipe(createWriteStream(destinationPath));
};

await compress();