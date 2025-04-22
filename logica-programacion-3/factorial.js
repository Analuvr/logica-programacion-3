function calculateFactorial() {
    let baseNumber = document.getElementById("factorial-of").value;
    let factorial = 1;

    for(let i=1; i <= baseNumber; i++){
        factorial = factorial * i;
    }
    
    const paragraph1 = document.createElement("p");
    const paragraph2 = document.createElement("p");
    const numberInDom = document.createElement("ul");
    const valuenumber = document.createElement("li");
    const factorialInDom = document.createElement("ul");
    const valuefactorial = document.createElement("li");

    paragraph1.textContent = "Número inicial";
    valuenumber.textContent = baseNumber;

    paragraph2.textContent = "Factorial";
    valuefactorial.textContent = factorial;

    numberInDom.appendChild(valuenumber);
    factorialInDom.appendChild(valuefactorial);

    document.body.appendChild(paragraph1);
    document.body.appendChild(numberInDom);

    document.body.appendChild(paragraph2);
    document.body.appendChild(factorialInDom);

    console.log(`Número inicial: ${baseNumber}`);
    console.log(`Factorial: ${factorial}`);
}

function getFactorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

module.exports = { getFactorial };