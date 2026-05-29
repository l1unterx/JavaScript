// variables
function getPass(){
    pass = 'something'; // global variable and is not safe to use
    var pass1 = 'something else';
    let pass2 = 'something else again';
    const pass3 = 'something else again and again';
}

getPass();


window.onload = function(){
    alert(pass); //show the secret becuse it is a global variable
}