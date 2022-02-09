function display(val) {
    document.getElementById('output').value+=val;
}
function c() {
    document.getElementById('output').value="";
}
function ce() {
    var text = document.getElementById('output').value
    text = text.slice(0,-1);
    document.getElementById('output').value=text;
}
function solve() {
    var exp = document.getElementById('output').value;
    var solu = eval(exp);
    document.getElementById('output').value=solu;
}
function percent() {
    num=document.getElementById('output').value;
    per = eval(num/100);
    document.getElementById('output').value=per;
}