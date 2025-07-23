function greeting(name) {
    console.log("Hello ",name);
}

greeting("Riya"); 


function Addition() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}

Addition(1, 2, 3, 4, 5);