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
  listItemElement = document.querySelectorAll("li");
  listItemElement.forEach(function (item, index) {
    item.addEventListener("click", eliminateItemCss);

    function eliminateItemCss() {
      item.classList.add("cross");
      listItems.splice();
      listItems.splice(index, 1);

      setTimeout(refreshList, 1000);
    }
  });

  if (listItems.length === 0) {
    listContainerElement.innerHTML = `<h3 class="text-center opacity-50">To-Do List is Empty</h3>`;
  }
}

let entryBoxElement = document.querySelector("#entryBox");
let entryFormElement = document.querySelector("#entryForm");
let listContainerElement = document.querySelector(".list-container");
let listItemElement = null;

let listItems = [
  "Hello!",
  "Click on a To-Do to Delete It",
  "Add More To-Dos which the form at the Top",
];

entryFormElement.addEventListener("submit", handleSubmit);

refreshList();
