import { writeFile } from 'fs/promises';
import { generatePathToFiles } from './helpers/path.js';
import { tryAction } from './helpers/common.js';

const newFilePath = generatePathToFiles('fresh.txt');

const create = async () => {
    async function actionCreate() {
        await writeFile(newFilePath, 'I am fresh and young', { flag: 'wx' });
    }
    await tryAction(actionCreate);
};

await create();