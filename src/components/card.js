import axios from "axios";


const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const divCard = document.createElement('div');
  const divHeadlin = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgContainerDiv = document.createElement('div');
  const imgcard = document.createElement('img');
  const authorSpan = document.createElement('span');

   divCard.classList.add('card');
   divHeadlin.classList.add('headline');
   authorDiv.classList.add('author');
   imgContainerDiv.classList.add('img-container');

   divCard.appendChild(divHeadlin);
   divCard.appendChild(authorDiv);
   authorDiv.appendChild(imgContainerDiv);
   imgContainerDiv.appendChild(imgcard);
   authorDiv.appendChild(authorSpan);
   divHeadlin.textContent = article.headline;
   imgcard.src = article.authorPhoto;
    authorSpan.textContent =('by', article.authorName);

    divCard.addEventListener('click', () =>{
      console.log(divHeadlin);

    });


return divCard;

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the responseponse closely!
  // Create a card from each and every article object in the responseponse, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  
   axios.get('http://localhost:5000/api/articles')
  .then(response => {
       
    const javascript = response.data.articles.javascript
    const bootstrap = response.data.articles.bootstrap
    const technology = response.data.articles.technology
    const jquery = response.data.articles.jquery
    const node = response.data.articles.node
    const paragragh = [...javascript,...bootstrap,...technology,...jquery,...node] 
    const cardChoice = document.querySelector(selector)
    paragragh.forEach(article => {     
     cardChoice.appendChild(Card(article))

    })
   
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log('i DONT CARE WHAT IT IS ');
  })
	
}


export { Card, cardAppender }
