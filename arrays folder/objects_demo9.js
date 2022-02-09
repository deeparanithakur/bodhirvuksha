var user ={
    name:"Dipshika",
    age: 1000
};
    var clone = {};///the new empty object

    ////lets copy all user properties into it
    for (let ley in user) {
        clone[key]= user[key];
    }

    //now closne is a fully independent object with the same conent

    console.log(user);
    console.log(clone);
    clone.name ='bahubali'; ///doesn't change in the user object
    console.log(user);
    console.log(clone);
