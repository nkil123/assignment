function navbar () {
  return ` <nav id="header">
    <div id="left">
        <h2><a href="search.html">Momato</a></h2>
    </div>

    <div id="middle">

        <div class="search">

            <input type="search" name=""  id="mName" placeholder="Search" />

            <div id="rec"></div>

        </div>

    </div>

    <div id="right">
        <a href="reciepeOfDay.html">Receipe of the day</a>
        <a href="latestReciepe.html"> Latest Receipe</a>
    </div>
</nav>`;
}

function search (tt, append) {
  let search = document.getElementById ('mName');

  let rec = document.getElementById ('rec');

  search.oninput = function () {
    debounce ();
  };

  async function find () {
    let name = document.getElementById ('mName').value;
    console.log ('name:', name);

    let data = await tt (
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`,
      'mealss'
    );
    console.log ('data:', data);

    append (data, rec);
  }

  var timerId;

  function debounce () {
    rec.style.visibility = 'visible';

    if (timerId) {
      clearTimeout (timerId);
    }

    timerId = setTimeout (() => {
      find ();
    }, 1000);
  }
}

export {search, navbar};
