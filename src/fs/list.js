import { readdir } from 'fs/promises';
import { generatePathToFiles } from './helpers/path.js';
import { tryAction } from './helpers/common.js';

const folderPath = generatePathToFiles();

const list = async () => {
    async function actionList() {
        console.log(await readdir(folderPath));
    }
    await tryAction(actionList); 
};

await list();