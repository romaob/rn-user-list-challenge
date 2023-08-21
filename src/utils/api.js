const URL = "https://randomuser.me/api/"

export const apiFetchUsers = () => {
    return fetch(URL+"?results=100")
        .then(response => response.json())
        .catch(error => console.log(error));
}