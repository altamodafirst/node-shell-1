
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = process.cwd();

    process.stdout.write(cmd);
    process.stdout.write('\nprompt > ');
});