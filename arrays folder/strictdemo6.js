///Octal numeric literals are not allowed:

"use strict";
let x = 010;    ///this will cause an error



//Octal escape character are not allowed:
"use strict";
let y ="\010";
console.log(y);    ////This will cause an error


////Writing a getter-only property is not allowed:

"use strict";
const obj ={get a() {return 0;} };

obj.a = 3.14;


///Assigning to a non=writable property is not allowed
"use strict";

let obj1 = {};
Object.definedProperty(obj1,'x', { value :42, writable: false});

///assignment to a non-writable property 
obj1.x = 9;  ///op:this will cause an error