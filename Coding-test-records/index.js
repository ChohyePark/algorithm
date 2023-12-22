


const onClickDelEvent = (e)=> {
  const removeItem = e.target.parentElement;
  removeItem.remove();
}

const onClickCheckEvent = (e) => {
  const item = e.target.parentElement;
  item.style.textDecoration = "line-through";
}


const onClickAddEvent = () => {
  let addItem = document.getElementById("content").value;
  let listItem = document.createElement("li");
  let delBtn = document.createElement("button");
  let check = document.createElement("input");
  check.setAttribute("type","radio");
  check.addEventListener("click",onClickCheckEvent);
  delBtn.innerText = "삭제";
  delBtn.addEventListener("click",onClickDelEvent);
  listItem.innerText = addItem;
  listItem.prepend(check);
  listItem.appendChild(delBtn);
  document.getElementById("list").appendChild(listItem);
}