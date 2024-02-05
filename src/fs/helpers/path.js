import { resolve } from 'path';

export const generatePath = (...pathSegments) => {
    const pathSegmentsToFs = ['src', 'fs'];
    return resolve(...pathSegmentsToFs, ...pathSegments);
}
export const generatePathToFiles = (...pathSegments) => {
    return generatePath('files', ...pathSegments);
}