///   ?. is called optional chaining operator

///  ?? is  called NULLISH COALESCING OPERATOR that returns its RHS operand when 
//its LHS operand is null or undefined, and otherwise returns its LHS operand.

const person ={
    name: 'Chetan Bhagat',
    age : '45',
    book : {
        year : 2015,
        author() {
            return "The Renowed Indian author";
        },
        copies : {
          publishedDate :2016
          }
        }
    }


const bookYear = person.book?.year;
const copiesPublishedDate = person.book?.copies?.publishedDate;

console.log(person.book?.author?.());

///optional chaining operator provides a waY to simplify accessing
//values through connected values through connected objects
///when its possible that a reference or a function may be UNDEFINED OR NULL. 