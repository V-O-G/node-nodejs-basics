const parseEnv = () => {
    const logResult = Object.entries(process.env)
        .filter(([key]) => key.startsWith('RSS_'))
        .map(entry => entry.join('='))
        .join('; ');  
    console.log(logResult);
};

parseEnv();