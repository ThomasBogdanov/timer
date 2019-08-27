const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
    if (key === '\u0003') {
        console.log("Thanks for using me, ciao!");
        process.exit();
    } else if (key === 'b') {
        process.stdout.write('\x07')
    } else if (Number(key) > 0 && Number(key) < 10) {
        console.log("setting timer for " + key + " seconds...");
        setTimeout(() => {process.stdout.write('\x07')}, (Number(key) * 1000));
    } else {
        console.log("Please try another key");
    }
});