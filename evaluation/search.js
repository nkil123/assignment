//https://newsapi.org/v2/everything?q=Apple&from=2021-10-18&sortBy=popularity&apiKey=b2649dfbf262419f88db4dee334604b8

let container = document.getElementById('container');
let names = JSON.parse(localStorage.getItem('search'));
display(names);

function display(art) {
    for (var i = 0; i < art.length; i++) {
        let div = document.createElement('div');

        let p = document.createElement('p');
        p.innerHTML = art[i].title;
        div.append(p);
        container.append(div);
    }
}