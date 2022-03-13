function toggle(param1,param2)
{
    console.log(param1,param2);
    async function postData(url = '') {
    const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    
    headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
    }
   
});
return response.json(); // parses JSON response into native JavaScript objects
}

postData(`/toggle?id=${param1}&op=${param2}`)
.then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
});
}