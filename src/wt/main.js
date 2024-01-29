import { Worker } from 'worker_threads';
import { resolve } from 'path';
import { cpus } from 'os';

const workerPath = resolve('src', 'wt', 'worker.js');
const initialValues = cpus().map((el, i) => el = i + 10);

const calculateInWorker = (value) => {
    return new Promise((resolve) => {
        const worker = new Worker(workerPath, { workerData: value });

        worker.on('message', result => resolve({
            status: 'resolved',
            data: result,
        }));
        worker.on('error', () => resolve({
            status: 'error',
            data: null,
        }));
    })
}

const performCalculations = async () => {
    const workerPromises = [];
    initialValues.forEach(value => workerPromises.push(calculateInWorker(value)));
    Promise.all(workerPromises).then(result => console.log(result));
};

await performCalculations();