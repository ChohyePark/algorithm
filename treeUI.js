
const data = [{
  type : 'groupName',
  name : 'name1',
  children : [
    {
      type : "groupName",
      name : 'name1-1',
      children : [
        {type : 'item' , name : 'name1-1-1'},
        {type : 'item' , name : 'name1-1-2'},
        {type : 'item' , name : 'name1-1-3'},
        {type : 'item' , name : 'name1-1-4'},
      ]
    },
    {
      type : "groupName",
      name : "name1-2",
      children : [
        {type : 'item' , name : 'name1-2-1', children : [{name : "Test"}]},
        {type : 'item' , name : 'name1-2-2'},
        {type : 'item' , name : 'name1-2-3'},
        {type : 'item' , name : 'name1-2-4'},
      ]
    }
  ]
  }
]

function createTreeView(menu, currentNode){
  for(let i = 0; i < menu.length; i++) {
    const res = document.createElement('li');
    const hasChildren = Array.isArray(menu[i].children);

    if(hasChildren) {
      const inputTag = document.createElement('input');
      const spanTag = document.createElement('span');
      const newUl = document.createElement('ul');

      inputTag.type = 'checkbox'
      spanTag.textContent = `${menu[i].name}`;

      res.append(inputTag, spanTag, newUl);
      currentNode.appendChild(res);

      createTreeView(menu[i].children, newUl);
    } else {
      res.textContent = `${menu[i].name}`
      currentNode.append(res);
    }
  }
}

const root = document.getElementById('root');
createTreeView(data,root)