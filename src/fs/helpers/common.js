export const tryAction = async (action) => {
    try {
        await action();
    } catch (error) {
        throw Error('FS operation failed');
    }
}