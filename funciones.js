function sumaCuatro(y) {
    console.log(y + 4)
}

sumaCuatro(8);

//PRIMERO
function sumaCuatro(y) {
    return y + 4;
}

//SEGUNDO
var sumaCuatro = function (y) {
    return y + 4;
}

//TERCERO
var sumaCuatro = (x) => {
    return x + 4;
}