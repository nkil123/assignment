//to get the different languages

async function difflangs () {
  let res = await fetch (`https://libretranslate.de/languages`);
  let data = await res.json ();
  console.log ('data:', data);
  appenddata (data);
}
difflangs ();

//for appending the data
function appenddata (langs) {
  let sel = document.getElementById ('select');

  langs.forEach (lang => {
    let opt = document.createElement ('option');

    opt.value = lang.code;
    opt.textContent = lang.name;

    sel.append (opt);
  });
}

//select the language
function langselected () {
  let val = document.getElementById ('select').value;
  //   console.log ('val:', val);
  localStorage.setItem (`lang`, JSON.stringify (val));
  return val;
}

///get the input from left box

function getInput () {
  let left = document.getElementById ('left');
  console.log ('left:', left);

  return left.value;
}

//api to translate
async function translate () {
  const res = await fetch ('https://libretranslate.de/translate', {
    method: 'POST',
    body: JSON.stringify ({
      q: getInput (),
      source: 'en',
      target: langselected (),
    }),
    headers: {'Content-Type': 'application/json'},
  });

  let data = await res.json ();
  let {translatedText} = data;
  appendres (translatedText);
}

function appendres (translated) {
  let right = document.getElementById ('right');
  right.innerHTML = translated;
  //   right.append (translated);
}

function go () {
  translate ();
}
