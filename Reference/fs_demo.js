const fs = require('fs');
const path = require('path');

//Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if (err) throw err;
//     console.log('folder created...')
// });

//create & write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', (err) => {
//     if (err) throw err;
//     console.log('file written to...');
//     //File append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love Node.js', (err) => {
//         if (err) throw err;
//         console.log('file written to...')
//     });
// });

//REad file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

//Rename File
fs.rename(path.join(__dirname, '/test', 'hello.txt'), (path.join(__dirname, '/test', 'helloworld.txt')), (err, data) => {
    if (err) throw err;
    console.log('file renamed...');
});