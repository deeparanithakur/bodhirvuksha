function x(a) {
    a();

}

x(function() {
    console.log('annoymous function called');

});