const parseArgs = () => {
    const logResult = process.argv
        .slice(2)
        .flatMap((el, i, arr) => i % 2 ? [] : [arr.slice(i, i + 2)])
        .map(entry => entry.join(' is '))
        .map(el => el.startsWith('--') ? el.slice(2) : el)
        .join(', ');
    console.log(logResult);
};

parseArgs();