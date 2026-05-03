
// app.use(express.json());


// app.use((req, res, next ) => {
//     console.log("Middleware executed");
//     next();
    
// }


// app.use(express.urlencoded({extended: true}));


// const cors = require("cors");

// app.use(cors());


// const morgan = require("morgan");

// app.use(morgan('dev')); 


// const helmet = require("helmet");

// app.use(helmet());

// const fs = require('fs');

// fs.writeFile("demo.txt", "Hello World", (err) => {
//     if(err) throw err;
//     console.log('File created');
    
// });

// fs.readFile("demo.txt", 'utf-8', (err, data) => {
//     console.log(data);
    
// });

// const path = require('path');

// console.log(path.join(__dirname, 'files',  'demo.txt'));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// os

// const { log } = require('console');
// const os = require('os');

// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.freemem());


// function isPanildrome(str){
//     let reversed = str.split('').reverse().join('');
//     return str === reversed;
// }

// console.log(isPanildrome("hello"));
// console.log(isPanildrome("level"));

// let n = 4;

// for (let i = 1; i <= n; i++){
//     let row = '';
//     for(j = 1; j <= n; j++){
//         row += '* ';
//     }

//     console.log(row);
    
// }



// star pattern

// let n = 4;

// for(let i = 1; i <= n ; i++){
//     let row = '';

//     for(let j = 1; j<= n; j++){
//         row += '* ';
//     }

//     console.log(row);
    
// }


// Right triangle

// let n = 4;

// for(let i = 1; i <= n ; i++){
//     let row = '';

//     for(let j = 1; j <= i; j++){
//         row += '* ';
//     }

//     console.log(row);
    
// }


// Inverted Triangle

let n = 4;

for(let i = n; i >= 1; i--){
    let row = '';

    for(let j = 1; j <= i ; j++){
        row += '* ';
    }
    console.log(row);
    
}
