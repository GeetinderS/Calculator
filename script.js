function addValue(){
    var operand1 = document.getElementById("inp1").value;
    var operand2 = document.getElementById("inp2").value;
    val1 = parseInt(operand1, 10);
    val2 = parseInt(operand2, 10);
    var result = val1 + val2;
    document.getElementById("sumplace").value = val1+"+"+val2+"="+result;
}
function mulValue(){
    var operand1 = document.getElementById("inp1").value;
    var operand2 = document.getElementById("inp2").value;
    val1 = parseInt(operand1, 10);
    val2 = parseInt(operand2, 10);
    var result = val1 * val2;
    document.getElementById("sumplace").value =val1+"*"+val2+"="+ result;
}function minValue(){
    var operand1 = document.getElementById("inp1").value;
    var operand2 = document.getElementById("inp2").value;
    val1 = parseInt(operand1, 10);
    val2 = parseInt(operand2, 10);
    var result = val1 - val2;
    document.getElementById("sumplace").value = val1+"-"+val2+"="+result;
}function clearValue(){
    document.getElementById("inp1").value = "";
    document.getElementById("inp2").value = "";
}