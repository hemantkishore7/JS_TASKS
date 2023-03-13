const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const container = document.getElementById('container');
const header = document.getElementById('header');
const head = document.getElementById('head');
const contentArea = document.getElementById('content-area');



async function getMealData(cb=()=>{}){
    try {
    const res = await fetch(url);
    const data = await res.json();
    let mealData = data.meals
    const copyData = [...mealData]
    
   //console.log(copyData);
   
   for (let i = 0; i < copyData.length; i++) {
    if(copyData[i]){
       cards(copyData[i])
    }

   }

} catch (error) {
        console.log(error);
}
}



function cards(data={}){
  console.log(data)
 
        const row = document.createElement('div')
        row.className ='row';
  
        const card = document.createElement('div');
        card.classList.add('card','col-sm-8','col-m-6','col-lg-6','mt-3')
        
        const name = document.createElement('text')
        name.classList.add('name','text-center')
        name.innerText = data.strMeal

        const imgDiv = document.createElement('div')
        imgDiv.className = 'imgDiv'

        const image = document.createElement('img');
        image.classList.add('card-image')
        image.src = data.strMealThumb

        imgDiv.appendChild(image)

        const cardBody = document.createElement('div')
        cardBody.className ='card-body';

        const para = document.createElement('p');
        para.classList.add('para','text-center')
        para.innerText = 'Instructions : ' +'\n' + data.strInstructions


        // const linkDiv = document.createElement('div')
        // linkDiv.className ='link'

        const youtube = document.createElement('a')
        youtube.classList.add('card-link')
        youtube.href = data.strYoutube
        youtube.innerText = ' Click To View Video '
        
        contentArea.appendChild(row);
        row.appendChild(card);
        card.append(name,imgDiv,cardBody);
        cardBody.append(para,youtube);
        // linkDiv.appendChild(youtube);
        
     
    
}

getMealData()
