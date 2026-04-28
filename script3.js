
// app.use(express.json());


// app.use((req, res, next ) => {
//     console.log("Middleware executed");
//     next();
    
// }


// app.use(express.urlencoded({extended: true}));


const cors = require("cors");

app.use(cors());


const morgan = require("morgan");

app.use(morgan('dev')); 


const helmet = require("helmet");

app.use(helmet());