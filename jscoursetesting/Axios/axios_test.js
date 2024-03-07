#!/usr/bin/node

const axios = require('axios');

/* axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    }); */

async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log('Response:', response.data);
    } catch(error) {
        console.error('Error:', error);
    }
}

fetchData();