function handleSubmit(event) {
  event.preventDefault();
  handleResponse(event.target[0].value);
}

function handleResponse(response) {
  console.log(response);
  console.log(listItem);
}

let listItem = document.querySelectorAll("li");
let entryBoxElement = document.querySelector("#entryBox");
let entryFormElement = document.querySelector("#entryForm");
let listContainerElement = document.querySelector(".list-container");
let activeItems = listItem.length;
let inactiveItems = 0;

entryFormElement.addEventListener("submit", handleSubmit);

listItem.forEach(function (item) {
  item.addEventListener("click", crossItem);

  function crossItem() {
    item.classList.add("cross");

    setTimeout(eliminateItem, 1000);
  }

  function eliminateItem() {
    inactiveItems += 1;
    item.classList.add("eliminate");
    if (activeItems - inactiveItems === 0) {
      listContainerElement.innerHTML = `<span class="text-black-50 text-center"> <h3 class="mb-3"> To-Do List is Empty </h3></span> `;
    }
  }
});
