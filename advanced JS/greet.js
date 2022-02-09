function doGreetings() {
    let name = document.getElementsByName("name") [0].value;
    document.getElementsById("result").innerHTML = '<b>Greetings ' +name + "</b>";
}