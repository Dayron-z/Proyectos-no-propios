const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  printTarea();
})


function printTarea() {
  console.log("f<ad");
  const taskContainer = document.createElement("div");
  const paragraphContaier = document.createElement("p");
  paragraphContaier.textContent = `${input.value}`;

  taskContainer.prepend(paragraphContaier)

  empty.prepend(taskContainer)
  input.value = "";
}