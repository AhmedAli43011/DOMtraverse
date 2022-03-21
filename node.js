const h1 = document.getElementsByTagName('h1')[0]
const p = document.getElementsByTagName('p')[0]
const ul = document.getElementsByTagName('ul')[0]
// console.log(document)
// const html = document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement);
// const head = document.head;
// console.log(document.head)
// ul.firstElementChild.style.background = 'yellow';\

for (let element of ul.children) {
    if(element==ul.children[0]){
        element.style.background = 'yellow';
    }
    else if(element==ul.children[1]){
    element.style.background = 'fuchsia';
}
else if(element==ul.children[2]){
    element.style.background = 'yellow';
}  
}

// for(let paragraph of p.childNodes){
//     console.log(paragraph)
// }
// document.body.children[3].lastElementChild.style.background = '';