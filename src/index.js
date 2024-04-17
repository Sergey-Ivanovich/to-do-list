function handleSubmit(event) {
  event.preventDefault();
}

let listItem = document.querySelectorAll("li");
let entryBoxElement = document.querySelector("#entryBox");
let entryFormElement = document.querySelector("#entryForm");

entrySubmitElement.addEventListener("submit", handleSubmit);

listItem.forEach(function (item, index) {
  item.addEventListener("click", crossItem);

  function crossItem() {
    item.classList.toggle("cross");

    setTimeout(eliminateItem, 1000);
  }

  function eliminateItem() {
    item.classList.add("eliminate");
  }
});
