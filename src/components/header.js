const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup bIelow.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // 
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
   const Hdiv = document.createElement('div');
   const newDate = document.createElement('span');
   const newTitle = document.createElement('h1');
   const newTemp = document.createElement('span');

   Hdiv.classList.add('header');
   newDate.classList.add('date');
   newTitle.classList.add('title');
   newTemp.classList.add('temp');

   Hdiv.appendChild(newDate);
   Hdiv.appendChild(newTitle);
   Hdiv.appendChild(newTemp);
   newDate.textContent = date;
   newTitle.textContent = title;
   newTemp.textContent = temp;
   return Hdiv;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerUpTop = Header('Lambda Times', 'January 6, 2021', '26');
  const headApp = document.querySelector(selector);
  headApp.appendChild(headerUpTop);
}

export { Header, headerAppender }
