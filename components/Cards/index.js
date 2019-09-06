// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(function (response) {
        console.log(response);
        console.log(response.data.articles);
        // response.data.topics.map(function (ele) {
        //     // console.log(ele)
        //     return Tab(ele)
        // })
    })
    .catch(function (error) {
        console.log(error);
    })
    
    
// function ArticleCards() {
//     // debugger
//     const div1 = document.createElement("div");
//     const div2 = document.createElement("div");
//     const div3 = document.createElement("div");
//     const div4 = document.createElement("div");
//     const img = document.createElement("img");
//     const span = document.createElement("span");

//     // span1.textContent = "SMARCH 28, 2019";
//     // span2.textContent = "98°";
//     // h1.textContent = "Lambda Times";

//     // div.classList.add("header");
//     // span1.classList.add("date");
//     // span2.classList.add("temp");

//     // div.appendChild(span1);
//     // div.appendChild(h1);
//     // div.appendChild(span2);

//     // const headerComponentAdder = document.querySelector(".header-container");
//     // headerComponentAdder.appendChild(div);

//     // return headerComponentAdder;
// }
