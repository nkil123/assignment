async function searchRec (url, q) {
  try {
    let res = await fetch (url);

    let data = await res.json ();

    if (q == 'categories') {
      return data.categories;
    } else if (q === 'meals') {
      return data.meals[0];
    }
    return data.meals;
  } catch (e) {
    console.log ('err:', e);
  }
}

function append (k, searchContainer) {
  if (k == undefined) {
    return false;
  }

  searchContainer.innerHTML = null;

  k.forEach (el => {
    let p = document.createElement ('p');

    p.innerText = el.strMeal;

    searchContainer.append (p);
  });
}

export {searchRec, append};
