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

// const arr = []

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(function (response) {
        // console.log(response);
        console.log(response.data.articles);
        const arr = []
        for(keys in response.data.articles) {
            arr.push(response.data.articles[keys])
        }
        //  console.log(arr)      
        arr.map(function (ele) {
            // console.log(ele)
            return eachDataArr(ele)
            // return Tab(ele)
        })
    })
    .catch(function (error) {
        console.log(error);
    })
    
function eachDataArr(dataArr){
    // console.log(dataArr)
    dataArr.map(function(ele){
        // console.log(ele)
        ArticleCards(ele)
    })

}

    
function ArticleCards(datas) {
    // debugger
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");
    const img = document.createElement("img");
    const span = document.createElement("span");

    div2.textContent = datas.headline;
    img.src = datas.authorPhoto;
    span.textContent = datas.authorName;

    div1.classList.add("card");
    div2.classList.add("headline");
    div3.classList.add("author");
    div4.classList.add("img-container");
    
    div1.appendChild(div2);
    div1.appendChild(div3);
    div3.appendChild(div4);
    div4.appendChild(img);
    div3.appendChild(span);

    const articleCardsComponentAdder = document.querySelector(".cards-container");
    articleCardsComponentAdder.appendChild(div1);

    return articleCardsComponentAdder;
}
