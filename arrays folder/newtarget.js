function User() {
console.log(new.target);
if(new.target!=undefined) {
    ///do some object creation 
    ///realted work

}else{
    ////do something apprppriate
}
}

User();/////called for not creating
///an Object so new.target value will be undefined

var obj = new.User(); ///new.target value witll 

///[Function:User]