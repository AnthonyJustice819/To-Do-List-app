const input = document.querySelector('#inputBox');
const btn = document.querySelector('#submit');
const list = document.querySelector('.list');


btn.addEventListener('click', (e)=>{
    e.preventDefault();
    if (input.value == "") {
        alert('please enter task')
    } else {
        const li = document.createElement('li');
        li.innerText = input.value;
        list.appendChild(li);
      const span = document.createElement('span');
      span.innerHTML = '\u00d7';
      li.appendChild(span);
    }
    input.value = ""
    storeData()
})

list.addEventListener('click', (e)=>{
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('checked')
        storeData()
    } else if (e.target.tagName == 'SPAN') {
        e.target.parentElement.remove();
        storeData()
    }
}, false)


function storeData() {
    localStorage.setItem('data', list.innerHTML);
}

function showData() {
    list.innerHTML = localStorage.getItem('data')
}
showData()