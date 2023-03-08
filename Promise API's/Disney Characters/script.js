const url = "https://api.disneyapi.dev/characters";

  const container = document.getElementById('container');

  const headingDiv = document.createElement('div')
  headingDiv.className = 'headingDiv';

  const heading = document.createElement('h3');
  heading.classList.add('h3','text-center');
  heading.innerText = 'Cartoon Characters';

  const row =document.createElement('div');
  row.className = 'row';

  container.append(headingDiv,row)
  headingDiv.appendChild(heading);

async function getCharacters(){
    try {
  const res = await fetch(url);
  const characterDetail = await res.json();
  const data = characterDetail.data;

  console.log(data);

  data.forEach((characters,index) => {
    
  
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-contanier',
  'col-sm-6','col-m-3','col-lg-3','col-xl-3','text-center','mt-3')
  cardContainer.setAttribute('id','card-container')
   
  const image = document.createElement('img');
  image.classList.add('img','card-img-center','mb-2','mt-2')
  image.src = characters.imageUrl

  const cardText = document.createElement('div');
  cardText.classList.add('cardText',);

  const name = document.createElement('p');
  name.classList.add('bold','font-weight-bold');
  name.innerText = 'Name : ' + characters.name ;

  const tvShow = document.createElement('p');
  tvShow.classList.add('bold','font-weight-bold')
  if(characters.tvShow){
    tvShow.innerText = 'Tv-Show : Undefined' ;
  }else{
    tvShow.innerText = 'Tv-Show : ' + [...characters.tvShows]
  }

  cardContainer.append(image,cardText)
  cardText.append(name,tvShow)
  row.appendChild(cardContainer);
});
} catch (error) {
        console.log(error);
}
}


getCharacters()