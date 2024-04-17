function handleSubmit(event) {
  event.preventDefault();
  handleResponse(event.target[0].value);
}

function handleResponse(response) {
  updateList(response);
}

function updateList(response) {
  listItems.push(response);
  refreshList();
}

function refreshList() {
  listContainerElement.innerHTML = null;
  listItems.forEach(function (item) {
    listContainerElement.innerHTML += `<li>${item}</li>`;
  });
}

let entryBoxElement = document.querySelector("#entryBox");
let entryFormElement = document.querySelector("#entryForm");
let listContainerElement = document.querySelector(".list-container");

let listItems = ["Hello", "Hey", "hi"];

listItems.forEach(function (item) {
  item.addEventListener("click", removeItem);

  function removeItem() {
    listItems.splice(item);
  }
});

entryFormElement.addEventListener("submit", handleSubmit);

refreshList();
