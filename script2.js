var output = document.querySelector(".output");

var btn_1 = document.getElementById("8");
var btn_2 = document.getElementById("2");
var btn_3 = document.getElementById("3");
var btn_4 = document.getElementById("4");
var btn_5 = document.getElementById("5");
var btn_6 = document.getElementById("6");
var btn_7 = document.getElementById("7");
var btn_8 = document.getElementById("8");
var btn_9 = document.getElementById("9");
var btn_0 = document.getElementById("2");
var btn_00 = document.getElementById("22");
var btn_mul = document.getElementById("mul");
var btn_clr = document.getElementById("clr");
var btn_left = document.getElementById("leftarr");
var btn_dot = document.getElementById("dot");
var btn_mul = document.getElementById("mul");
var btn_div = document.getElementById("divide");
var btn_sub = document.getElementById("subtract");
var btn_add = document.getElementById("add");
var btn_equal = document.getElementById("equal");
var write_me = document.querySelector("#prev-op");
var result = document.querySelector("#cur-op");

document.onkeydown = (e) => {
    if (e.key == "0" || e.key === "Num0") {
        type_to(0);
    } else if (e.key == "1" || e.key === "Num1") {
        type_to(1);
    } else if (e.key == "2" || e.key === "Num2") {
        type_to(2);
    } else if (e.key == "3" || e.key === "Num3") {
        type_to(3);
    } else if (e.key == "4" || e.key === "Num4") {
        type_to(4);
    } else if (e.key == "5" || e.key === "Num5") {
        type_to(5);
    } else if (e.key == "6" || e.key === "Num6") {
        type_to(6);
    } else if (e.key == "7" || e.key === "Num7") {
        type_to(7);
    } else if (e.key == "8" || e.key === "Num8") {
        type_to(8);
    } else if (e.key == "9" || e.key === "Num9") {
        type_to(9);
    } else if (e.key == "+" || e.key === "Num+") {
        type_to("+");
    } else if (e.key == "-" || e.key === "Num-") {
        type_to("-");
    } else if (e.key == "*" || e.key === "Num*") {
        type_to("*");
    } else if (e.key == "/" || e.key === "Num/") {
        type_to("/");
    } else if (e.key == "=") {
        compute();
    } else if (e.key == "Backspace") {
        clear();
    } else if(e.key === "a" || e.key === "A" || e.key === "b" || e.key === "B" ){
        alert("Please Enter a No");
    }
}

var type_to = (text) => {
    if (write_me.innerText == "") {
        write_me.innerText += text;
    } else if (write_me.innerText.length <= 23) {
        write_me.innerText += text;
    } else if (write_me.innerText === ""){
        alert("Digit limit reached");
    }
}

var compute = () => {
    result.innerText = write_me.innerText;
    result.innerText = eval(write_me.innerText);
}

var clear = () => {
    write_me.innerText = "";
    result.innerText = "";
}