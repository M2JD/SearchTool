const fs = require('fs');
const path = require('path');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
    .option('text', {
        alias: 't',
        type: 'string',
        description: 'Text to search for',
        demandOption: true
    })
    .option('case-sensitive', {
        alias: 'c',
        type: 'boolean',
        description: 'Case sensitive search',
        default: false
    })
    .option('regex', {
        alias: 'r',
        type: 'boolean',
        description: 'Use regular expression',
        default: false
    })
    .option('file-type', {
        alias: 'f',
        type: 'string',
        description: 'File type to search in (e.g., .txt, .js)',
        default: '.txt'
    })
    .argv;

function searchInDirectory(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            searchInDirectory(fullPath);
        } else if (fullPath.endsWith(argv.fileType)) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const lines = content.split('\n');
            lines.forEach((line, index) => {
                let found = false;
                if (argv.regex) {
                    const regex = new RegExp(argv.text, argv.caseSensitive ? '' : 'i');
                    found = regex.test(line);
                } else if (argv.caseSensitive) {
                    found = line.includes(argv.text);
                } else {
                    found = line.toLowerCase().includes(argv.text.toLowerCase());
                }
                if (found) {
                    console.log(`${fullPath}:${index + 1}`);
                }
            });
        }
    });
}

searchInDirectory('.');