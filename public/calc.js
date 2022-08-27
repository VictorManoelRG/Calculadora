function onLoad() {
    document.calc.visor.value = "Insira uma conta.";
}
function onClick(button) {
    if (document.calc.visor.value === "Insira uma conta.") {
        if (button === "+" || button === "-" || button === "*" || button === "/") {
            document.calc.visor.value = "Insira uma conta."
        }
        else document.calc.visor.value = button;
    }
    else if (document.calc.visor.value === "+" || document.calc.visor.value === "-" ||
        document.calc.visor.value === "*" || document.calc.visor.value === "/") {
        document.calc.visor.value = button;
    }

    else if (document.calc.visor.value.slice(-1) === "+" || document.calc.visor.value.slice(-1) === "-" ||
        document.calc.visor.value.slice(-1) === "*" || document.calc.visor.value.slice(-1) === "/") {
        if (button === "+" || button === "-" || button === "*" || button === "/") {
            aux = document.calc.visor.value;
            aux1 = aux.slice(0, -1) + button;
            document.calc.visor.value = aux1;
        }
        else document.calc.visor.value += button;
    }

    else document.calc.visor.value += button;
}
function apagarCaracter() {
    document.calc.visor.value = document.calc.visor.value.slice(0, -1);
}
function resolverConta() {
    if (!document.calc.visor.value) {
        window.alert("Você não inseriu contas ainda.");
        document.calc.visor.value = '';
    }

    if(document.calc.visor.value.slice(-1) === "+" || document.calc.visor.value.slice(-1) === "-" ||
    document.calc.visor.value.slice(-1) === "*" || document.calc.visor.value.slice(-1) === "/"){
        window.alert("ERRO. Repita o calculo.")
    }


    if (eval(document.calc.visor.value) === undefined) {
        window.alert("ERRO. Repita o calculo.")
    }
    else document.calc.visor.value = eval(document.calc.visor.value);;
}