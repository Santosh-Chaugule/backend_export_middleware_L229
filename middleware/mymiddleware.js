//In javscript you can save function inside a variable

let mWfN1 = (req, res, next) => {
    console.log(req.body)
    req.body.name = req.body.name.toUpperCase()
    req.body.surname = req.body.surname.toUpperCase()


    next();
}


let mWfN2 = function (req, res, next) { next() }

//there are two types export in node js
//1. default export
//2. named export
//2.1. Module.expoert={}
module.exports = { mWfN1, "mWfN2": mWfN2 }//short hand notation