
function getUsers() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let users = request.response;
            for (let user of users) {
                let content = `  <div class="userContainer" onclick="getPosts(${user.id})">
                <h3>${user.name}</h3>
                <p>${user.email}</p>
            </div>`;
                document.getElementById("sidbar").innerHTML += content;
            }
        }
        else {
            console.log("Error: " + request.status);
        }
    }
}
