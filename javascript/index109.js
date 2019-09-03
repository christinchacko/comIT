const validateUser = function(username , password){
    return ((username === 'nacho' && password === 'Nerd1979')||
    (username === 'pedro' && password === 'Batman0217')||
    (username === 'marta' && password === 'Mother2312')) ? true : false;
}

let message = (validateUser('pedro', 'Batman0217')) ? `Welcome ${username.toUpperCase()}, nice to see you again` : 'Please input valid credentials';
console.log(message);

message = (validateUser('marta', 'Nerd1979')) ? `Welcome ${username.toUpperCase()}, nice to see you again` : 'Please input valid credentials';
console.log(message);