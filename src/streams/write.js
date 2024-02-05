import { resolve } from 'path';
import { createWriteStream } from 'fs';

const filePath = resolve('src', 'streams', 'files', 'fileToWrite.txt');

const write = async () => {
    process.stdin.pipe(createWriteStream(filePath));
};

await write();