let container = document.getElementById('container');

let data = JSON.parse(localStorage.getItem('news'));
display(data[0]);

function display(contdata) {
    let imageDiv = document.createElement('div');
    imageDiv.className = 'imgContainer';

    let img = document.createElement('img');
    img.src = contdata.urlToImage;

    imageDiv.append(img);

    let exp = document.createElement('div');
    exp.className = 'exp';

    let author = document.createElement('h2');
    author.innerHTML = contdata.author;

    let title = document.createElement('h1');
    title.innerHTML = contdata.title;

    let description = document.createElement('p');
    description.innerHTML = contdata.description;

    let publishedAt = document.createElement('p');
    publishedAt.innerHTML = contdata.publishedAt;

    exp.append(author, title, description, publishedAt);

    container.append(imageDiv, exp);
}