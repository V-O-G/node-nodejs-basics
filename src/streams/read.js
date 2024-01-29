import { resolve } from 'path';
import { createReadStream } from 'fs';

const filePath = resolve('src', 'streams', 'files', 'fileToRead.txt');

const read = async () => {
    createReadStream(filePath).pipe(process.stdout);
};

await read();