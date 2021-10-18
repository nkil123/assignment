//https://newsapi.org/v2/everything?q=Apple&from=2021-10-18&sortBy=popularity&apiKey=b2649dfbf262419f88db4dee334604b8

let container = document.getElementById('container');
let names = JSON.parse(localStorage.getItem('search'));
display(names);

function display(art) {
    for (var i = 0; i < art.length; i++) {
        // let div = document.createElement('div');

        let div = document.createElement('div');
        div.className = 'articles';

        let imageDiv = document.createElement('div');
        imageDiv.className = 'imgContainer';

        let img = document.createElement('img');
        img.src = art[i].urlToImage;

        imageDiv.append(img);

        let exp = document.createElement('div');
        exp.className = 'exp';

        let author = document.createElement('h2');
        author.innerHTML = art[i].author;
        let title = document.createElement('h1');
        title.innerHTML = art[i].title;

        exp.append(title, author);
        div.append(imageDiv, exp);
        container.append(div);
    }
}