const img = document.getElementById('img');
const imgBox = document.getElementById('imgBox');

const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=Game-Show';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9637a21df4msh0b179de3a323c03p18202cjsn81ac897b05dd',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
  },
};

async function temp() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const list = result.d;

    list.map((item) => {
      const name = item.l;
      const poster = item.i.imageUrl;
      // img.forEach((e) => {
      //   e.src += poster;
      //   console.log(poster);
      // });
      const moviePic = `<img src="${poster}"></img>`;
      imgBox.innerHTML += moviePic;
      console.log(poster);
    });
  } catch (error) {
    console.log(error);
  }
}

temp();
