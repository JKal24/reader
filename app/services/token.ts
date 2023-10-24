

const generateAuthToken = () => {
    return fetch('https://random-data-api.com/api/v2/users?size=1', {
        method: 'GET',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
    }).then(response => response.json())
    .then(user => user.uid);
}