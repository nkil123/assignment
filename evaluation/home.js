///b2649dfbf262419f88db4dee334604b8
//https://newsapi.org/v2/top-headlines?country=us&apiKey=b2649dfbf262419f88db4dee334604b8

let headlines = document.getElementById('headlines');

async function rand() {
    let res = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=b2649dfbf262419f88db4dee334604b8'
    );
    // console.log('res:', res);

    let data = await res.json();
    console.log('data:', data.articles);
    display(data.articles);
}
rand();

// author": "Rhea Mogul and Swati Gupta, CNN",
// "title": "At least 22 people killed after torrential rain in India's Kerala state triggers landslides and floods - CNN",
// "description": "At least 22 people have been killed and five remain missing after heavy rain triggered floods and landslides in southern India.",
// "url": "https://www.cnn.com/2021/10/18/india/kerala-rains-flooding-intl-hnk/index.html",
// "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211017211531-02-kerala-flooding-1016-super-tease.jpg",
// "publishedAt": "2021-10-18T07:16:00Z",
// "content": null
function display(news) {
    news.forEach(article => {
        let div = document.createElement('div');
        div.className = 'articles';
        div.onclick = function() {
            showArticle(article);
        };
        let imageDiv = document.createElement('div');
        imageDiv.className = 'imgContainer';

        let img = document.createElement('img');
        img.src = article.urlToImage;

        imageDiv.append(img);

        let exp = document.createElement('div');
        exp.className = 'exp';

        let author = document.createElement('h2');
        author.innerHTML = article.author;
        let title = document.createElement('h1');
        title.innerHTML = article.title;
        // let description = document.createElement('p');
        // description.innerHTML = article.description;
        // let publishedAt = document.createElement('p');
        // publishedAt.innerHTML = article.publishedAt;

        exp.append(title, author);

        div.append(imageDiv, exp);

        headlines.append(div);
    });
}

function showArticle(artdata) {
    if (localStorage.getItem('news') == null) {
        localStorage.setItem('news', JSON.stringify([]));
    }

    let news = JSON.parse(localStorage.getItem('news'));

    news = [];
    news.push(artdata);
    localStorage.setItem('news', JSON.stringify(news));
    window.location.href = 'news.html';
}

async function search() {
    let article_name = document.getElementById('search').value;

    let res = await fetch(
        `https://newsapi.org/v2/everything?q=${article_name}&from=2021-10-18&sortBy=popularity&apiKey=b2649dfbf262419f88db4dee334604b8`
    );

    let data = await res.json();
    console.log('data:', data.articles);

    if (localStorage.getItem('search') == null) {
        localStorage.setItem('search', JSON.stringify([]));
    }
    let search_local = JSON.parse(localStorage.getItem('search'));
    search_local = data.articles;
    localStorage.setItem('search', JSON.stringify(search_local));
    window.location.href = 'search.html';
}