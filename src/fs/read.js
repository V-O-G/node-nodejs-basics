import { readFile } from 'fs/promises';
import { generatePathToFiles } from './helpers/path.js';
import { tryAction } from './helpers/common.js';

const filePath = generatePathToFiles('fileToRead.txt');

const read = async () => {
    async function actionRead() {
        console.log(await readFile(filePath, { encoding: 'utf8' }));
    }
    await tryAction(actionRead);
};

await read();