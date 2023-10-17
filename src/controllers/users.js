

import axios from 'axios'

const users = [
    {
        id: 1,
        fullName:'Sanaa layssar',
        useName: 'sou',
        email: 'sou@hotmail.com',
        PassWord: 12345678,
 
    },
    {
        id: 2,
        fullName: 'Bernar k',
        useName:'Ben',
        email: 'ben@teccart.online',
        PassWord: 12345678,
    },
    {
        id: 3,
        fullName:'Meryame Smith',
        useName: 'Mery',
        email: 'Smith@teccart.online',
        PassWord: 12345678,
    }
]

export  async function find() {//use async

    const { data } = await axios.get('https://api.joeleprof.com/ex1/users/');
    console.log(data);
    return users;
};

export function findByemail(email) {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.email === parsefloat(email)) {
            return user;
        }
    }
    return null
}

//const generateid


export function deleteById(id) {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id === parseInt(id)) {
            users.splice(i, 1);
            return true;
        }
    }
    return false;
}

export function createUser(user) {
     axios.post('https://api.joeleprof.com/ex1/users/',{})
    user.id = users.length + 1;
    users.push(user);
    return user;
}


