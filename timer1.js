// process.stdout.write('\x07');

const userTimes = process.argv.slice(2);

for (let i = 0; i < userTimes.length; i++) {
    if (userTimes[i] === NaN || userTimes[i] < 0) {
        i++;
    } else {
        setTimeout(() => {
            process.stdout.write('\x07')}, userTimes[i] * 1000)
        }
    }