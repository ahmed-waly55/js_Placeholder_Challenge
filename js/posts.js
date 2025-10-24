function getPosts(userId) {
    let request = new XMLHttpRequest();
    request.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${userId}`, true);
    request.responseType = "json";
    request.send();
    document.getElementById("posts").innerHTML = '';

    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let posts = request.response;
            for (let post of posts) {
                let content = ` <div class="post">
                    <h3>${post.title} </h3>
                    <h4>${post.body}</h4>
                </div>`;
                document.getElementById("posts").innerHTML += content;
            }
        }
        else {
            console.log("Error: " + request.status);
        }
    }
}


