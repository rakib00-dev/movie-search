const img = document.getElementById('img');
const imgBox = document.getElementById('imgBox');
const nameIn = document.getElementById('nameIn');

const btn = document.getElementById('btn');
const input = document.getElementById('input');

btn.onclick = btnFun;

function btnFun() {
  imgBox.innerHTML = '';

  const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${input.value}`;
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
        const rank = item.rank;
        const year = item.y;
        const poster = item.i.imageUrl;

        const moviePic =
          `<img id="img" src="${poster}" alt="boy" />
            <div id="text-wrap">
              <h3><span id="nameIn">${name}</span></h3>
              <h5>
                Ratting: <span style="color: orange">★</span>
                <span id="rattingIn">9.2</span>/10
              </h5>
              <h5>
                Rank:
                <span id="rankIn">${rank}</span>
              </h5>

              <h5>
                Release Date:
                <span id="releaseDate" style="font-weight: 500">${year}</span>
              </h5>
              
            </div>` + '\n';
        imgBox.innerHTML += moviePic;
        console.log(poster);
        console.log(item);
      });
    } catch (error) {
      console.log(error);
      imgBox.innerHTML = '<h5 style="margin:auto">NO RESULT FOUND</h5>';
    }
  }
  console.log('ok');
  temp();
}
