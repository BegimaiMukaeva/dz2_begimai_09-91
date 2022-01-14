//hw1
//Необходимо написать скрипт, который при нажатии кнопки "+" добавляет в контейнер новый <div> с классом element и текстом Element.
let root1 = document.getElementById('container')
let root2 = document.getElementById('container2')
document.getElementById("add-item-btn").addEventListener("click", () => {
    createElement(root1, 'Element')
});

function createElement(root, textElement) {
    let element = document.createElement("div");
    element.className = "element";
    element.innerText = textElement;
    root.appendChild(element);
}

//hw2
//Необходимо написать функцию, которая каждые пять секунд будет добавлять
// в контейнер тег <div> с классом element, текст элемента - случайное число от 0 до 20.

const start = document.getElementById('start')
const stop = document.getElementById('stop')

let interval;
start.onclick = function () {
    interval = setInterval(() => {
        const randomNum = Math.floor(Math.random() * 20)
        createElement(root2, randomNum)
    }, 1000)
}

stop.onclick = function () {
    clearInterval(interval)
}