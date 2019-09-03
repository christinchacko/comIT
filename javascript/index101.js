const user = {
    name: 'Christin',
    age: 40,
    phoneNumber: '431-3333-999',
    street: 'xxx xxxx xxx',
    postalCode: 'R3F 3H6',
    married: true
}

function showUser () {
    console.log('Name:',user.name);
    console.log('Age:',user.age);
    console.log('Phone Number:',user.phoneNumber);
    console.log('Street:',user.street);
    console.log('Postal Code:',user.postalCode);
    console.log('Married:',user.married);
}

showUser();