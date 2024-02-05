import { createHash } from 'crypto';
import { resolve } from 'path';
import { createReadStream } from 'fs';

const filePath = resolve('src', 'hash', 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const hash = createHash('sha256');
    const stream = createReadStream(filePath);

    stream
        .on('data', (data) => hash.update(data))
        .on('end', () => console.log(hash.digest('hex')));
};

await calculateHash();