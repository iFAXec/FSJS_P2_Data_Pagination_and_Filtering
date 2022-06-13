/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

//showPage function takes two parameters which will take student data and page as arguements
function showPage(list, page) {
  
  //Two variables which will display start and end index of student data 
   const startIndex = ( page * 9 ) - 9;
   const endIndex = page * 9;

    
   const studentListUL = document.querySelector(".student-list");
   // console.log(studentListUL);
   //student list is set to an empty string so remove string
   studentListUL.innerHTML = "";
   let html = "";

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex ) {
         html += `
       <li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src= ${list[i].picture.large} alt="Profile Picture">
           <h3>${list[i].name.first} ${list[i].name.last}</h3>
           <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
           <span class="date">Joined ${list[i].registered.date}</span>
         </div>
       </li>
         `;        
      }      
   }
   studentListUL.insertAdjacentHTML("beforeend", html);    
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/


function addPagination(list) {
  // console.log(list);

  //variable show the number of the pagination button needed
  const numOfPages = Math.ceil(list.length/9);
  // console.log(numOfPages);    
  const linkListUL = document.querySelector(".link-list");
  //the list is set to am empty string to remove data if present
  linkListUL.innerHTML = "";
  let buttonHTML = "";

  for (let i = 1; i < numOfPages; i++) {
    buttonHTML += `
    <li>
      <button type="button">${i}</button>
    </li>    
    `; 
    // console.log(buttonHTML);
}

linkListUL.insertAdjacentHTML("beforeend", buttonHTML);

const button = document.querySelectorAll("button[type='button']");
button.className = "active";
// console.log(button);

linkListUL.addEventListener("click", (e)=>{
  const buttonClicked = e.target;
  if(buttonClicked.tagName === "BUTTON"){
    const activeClassButton = document.getElementsByClassName("active");
    activeClassButton.className = "";  
    activeClassButton.className="active";
    showPage(list,buttonClicked.textContent);
    // console.log(activeClassButton);
  }
});
}


// Call functions
showPage(data,1);
addPagination(data);

//Search bar

const body = document.querySelector("body");
const searchLabel = document.createElement("label");
const searchSpan = document.createElement("span");
const searchInput = document.createElement("input");
const searchButton = document.createElement("button");
const searchImg = document.createElement("img");


function searchBar() {
  searchLabel.setAttribute("for", "search");
  searchLabel.className = "student-search";
  searchSpan.textContent = "Search by name";
  searchLabel.appendChild(searchSpan);

  searchInput.placeholder = "Search by name...";
  searchInput.setAttribute("id","search");
  searchSpan.appendChild(searchInput);

  searchButton.setAttribute("type", "button");
  searchButton.setAttribute("alt", "Search icon");
  
  searchInput.appendChild(searchButton);
  searchButton.appendChild(searchImg);

  let searchHTML = "";
  
       searchHTML += `<label>${searchLabel}</label>`;
       searchHTML += `<span>${searchSpan}</span>`;
       searchHTML += `${searchInput}`;
       searchHTML += `${searchButton}`;

       return searchHTML;
   
}
searchBar();

body.insertAdjacentHTML("afterbegin", searchBar);



console.log(searchBar())
console.log(searchSpan);
console.log(searchLabel);
console.log(searchInput);
console.log(searchButton);
