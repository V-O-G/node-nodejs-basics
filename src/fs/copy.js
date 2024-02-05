import { access, cp } from 'fs/promises';
import { generatePath, generatePathToFiles } from './helpers/path.js';
import { tryAction } from './helpers/common.js';

const sourcePath = generatePathToFiles();
const destinationPath = generatePath('files_copy');

const copy = async () => {
    async function actionCopy() {
        await access(sourcePath);
        await cp(sourcePath, destinationPath, {
            errorOnExist: true,
            force: false,
            recursive: true,
        });
    }
    await tryAction(actionCopy);
};

await copy();
