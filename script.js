const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function () {
  
  var data = JSON.parse(this.response)
  if (request.status) {
    data.forEach((movie) => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h2 = document.createElement('h2')
      h2.textContent = `${movie.title} (${movie.original_title}) --- [${movie.release_date}]`

      const time = document.createElement('h4')
      time.className = "time";
      time.textContent = `Running Time: ${movie.running_time} minutes`

      const descr = document.createElement('p')
      descr.className = "descr";
      descr.textContent = "Description: "

      const p = document.createElement('p')
      p.textContent = movie.description

      const dp = document.createElement('h4')
      dp.textContent =  `Director: ${movie.director} /// Producer: ${movie.producer}`

      container.appendChild(card);
      card.appendChild(h2);
      card.appendChild(time);
      card.appendChild(descr);
      card.appendChild(p);
      card.appendChild(dp);
    });
  } else {
    console.log(error);
  }
};

request.send();