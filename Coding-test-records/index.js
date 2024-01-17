


const onClickDelEvent = (e)=> {
  const removeItem = e.target.parentElement;
  removeItem.remove();
}

const onClickCheckEvent = (e) => {
  const item = e.target.parentElement;
  item.style.textDecoration = "line-through";
  item.style.color = "grey";
}

const onClickAddEvent = () => {
  let addItem = document.getElementById("content");
  document.getEle
  if (addItem.value === "") {
    alert("할일을 입력해주세요")
    return false;
  } else {
    let listItem = document.createElement("li");
    let delBtn = document.createElement("button");
    let check = document.createElement("input");
    listItem.style.fontSize = "20px";
    listItem.style.listStyle = "none";
    listItem.style.textAlign = "start";
    check.setAttribute("type","radio");
    check.addEventListener("click",onClickCheckEvent);
    delBtn.innerText = "삭제";
    delBtn.style.marginLeft = "10px";
    delBtn.style.borderRadius = "20px";
    delBtn.style.height = "25px";
    delBtn.style.width = "50px";
    delBtn.style.border = "none";
    delBtn.style.backgroundColor = "black";
    delBtn.style.color = "white";
    delBtn.addEventListener("click",onClickDelEvent);
    listItem.innerText = addItem.value;
    listItem.prepend(check);
    listItem.appendChild(delBtn);
    document.getElementById("list").appendChild(listItem);
    addItem.value = "";
  }
}