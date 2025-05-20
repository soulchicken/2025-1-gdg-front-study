let root = document.getElementById("root");
let button = document.getElementById("call");

function render(data) {
    for (let i = 0; i < data.length; i++) {
        let h2Tag = document.createElement("h2");
        h2Tag.textContent = data[i].title;
        root.appendChild(h2Tag);
    }
}

function onButtonClick() {
    console.log("버튼 클릭!");
    fetch('https://jsonplaceholder.typicode.com/users1/1/todos')
    .then((response) => response.json())
    .then((json) => render(json));
}

button.addEventListener("click", onButtonClick);