// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(function (response) {
        console.log(response.data.topics);
        return response.data.topics.map(function (ele) {
            console.log(ele)
            Tab(ele)
        })
    })
    .catch(function (error) {
        console.log(error);
    })

function Tab(topics) {
    debugger
    const div = document.createElement("div");
    div.textContent = topics.topics;

    const topicsComponentAdder = document.querySelector(".topics");
    topicsComponentAdder.appendChild(div);

    return topicsComponentAdder;
}