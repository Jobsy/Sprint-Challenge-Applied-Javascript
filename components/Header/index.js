// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    // debugger
    const div = document.createElement("div");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const h1 = document.createElement("h1");

    span1.textContent = "SMARCH 28, 2019";
    span2.textContent = "98°";
    h1.textContent = "Lambda Times";

    div.classList.add("header");
    span1.classList.add("date");
    span2.classList.add("temp");

    div.appendChild(span1);
    div.appendChild(h1);
    div.appendChild(span2);

    const headerComponentAdder = document.querySelector(".header-container");
    headerComponentAdder.appendChild(div);

    return headerComponentAdder;
}
Header();
