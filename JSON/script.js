const obj = {
    name :" rahul",
    rolno: 1,
    course : "JS",
    fee : "free"
}

// stringify()

const newObj = JSON.stringify(obj)
console.log(newObj);


// parse()

const obj2 = JSON.parse(newObj)
console.log(obj2);
