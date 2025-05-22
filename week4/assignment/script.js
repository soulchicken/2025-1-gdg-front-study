let root = document.querySelector('#root');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => render(json));

function render(posts) {
    console.log(posts);
    let div = document.createElement('div');

    for (let i = 0; i < posts.length; i++) {
        let post = document.createElement('article');
        
        let postTitle = document.createElement('h2');
        postTitle.innerText = '게시글 제목 : ' + posts[i].title;
        post.appendChild(postTitle);

        let postButton = document.createElement('button');
        postButton.innerText = '게시글 내용 보기';

        postButton.addEventListener('click', () => {
            let postBody = document.createElement('p');
            postBody.innerText = posts[i].body;
            post.appendChild(postBody);
            post.removeChild(postButton);
        }); 
        post.appendChild(postButton);

        div.appendChild(post);
    }
    root.appendChild(div);
}
