///destructuring at parameter level itself arrow

const myFunc = ({x,y}) => {
    console.log(x);
    console.log(y);
};

const obj = {x: 123, y: 'Yo Yo'};
myFunc(obj);

//normal
function anotherFunc({x,y}) {
    console.log(x);
    console.log(y);
}
anotherFunc(obj);