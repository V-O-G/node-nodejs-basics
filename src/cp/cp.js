import { resolve } from 'path';
import { fork } from 'child_process';

const filePath = resolve('src', 'cp', 'files', 'script.js');

const spawnChildProcess = async (args) => {
    fork(filePath, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['--some-arg', '--arg2']);
