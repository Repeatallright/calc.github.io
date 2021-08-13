let blockShow = document.querySelector('.show_info');
let innerItems = document.querySelectorAll('.inner_item');
let itemList = '';

innerItems.forEach(elem => {
    elem.addEventListener('click', calcFun)
})

function calcFun(event) {
    if (event.target.id != '=' && event.target.id != 'del') {
        itemList += event.target.id;
        blockShow.textContent = itemList;
    }
    else if (event.target.id == '=') {
        blockShow.innerHTML = eval(itemList);
        itemList = eval(itemList);
    }
    else if (event.target.id == 'del') {
        itemList = itemList.slice(0, -1)
        blockShow.textContent = itemList;
        console.log(itemList);

    }

}
