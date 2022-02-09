var user = { name : 'Deepa'};
var permissions1 = {canView : true};
var permissions2 = {canEdit: true};


///copies all properties fro permission1 n permission2 inot user 
Object.assign(user, permissions1, permissions2);

//now user = { name: "deepa", canView:true,canEdit:true}

console.log(user);