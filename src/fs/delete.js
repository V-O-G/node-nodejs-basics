import { rm } from 'fs/promises';
import { generatePathToFiles } from './helpers/path.js';
import { tryAction } from './helpers/common.js';

const filePath = generatePathToFiles('fileToRemove.txt');

const remove = async () => {
    async function actionDelete() {
        await rm(filePath);
    }
    await tryAction(actionDelete);
};

await remove();