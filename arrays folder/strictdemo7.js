///Assigning a new property on a non-extensible object is not allowed.

"use strict";

let obj ={}
Object.preventExtensions(obj);

//Assignment to new property on a non-extensible object))
obj.newValue = 'new value'; ///op this will cause an error


///The variable name arguements and eval are not allowed

"use strict";
let arguments ='hello';   
let eval =44;       ////this will cause an error




////lastle we also cannot use these keywords in strict mode:
/////implements, interface, let,package,private,protected,public,
///static and yield
//////BENEFITS OF STRICT MODE
//the use of strict mode are:
///it helps to write a cleaner code
//changes previously accepted siletn errors(bad syntax) into real errors 
//and throwa an error message
///makes it easier to write "secure" JavaScript