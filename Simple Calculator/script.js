function ClickEvent(val) {
    if (val === "=") {
        Calculate();
    }
    else if (val === "C") {
        Clear();
    }
    else {
        document.getElementById("inputField").value += val;
    }
}

function Clear() {
    document.getElementById("inputField").value = "";
}

function Calculate() {
    document.getElementById("inputField").value = eval(document.getElementById("inputField").value);
}