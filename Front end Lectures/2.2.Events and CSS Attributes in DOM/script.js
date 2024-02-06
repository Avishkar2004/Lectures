
// let div = document.createElement('div');
// div.innerHTML = '<p>CreateElement example</p>';
// document.body.appendChild(div)


// parentNode.appendChild(childNode);



function createMenuItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
// get the ul#menu
const menu = document.querySelector('#menu');
// add menu item
menu.appendChild(createMenuItem('Home'));
menu.appendChild(createMenuItem('Services'));
menu.appendChild(createMenuItem('About Us'));

// (function(){
//     'use strict';
//     //create a element
//     var newElement = document.createElement('li');
//     //add some text  
//     newElement.textContent = 'hello fuck this'

//     var list = document.getElementById('mi-list')
//     //list.appendChild(newElement)

//     list.insertBefore(newElement,list.firstElementChild)
//     //remove it 
//     //list.removeChild(newElement)

//     //replace child
//     var replaceElement = document.createElement('li')
//     replaceElement.textContent = 'im a replacing';
//     //list.replaceChild(replaceElement,newElement)
//     console.log(newElement)
// }())

//3.Modify HMTL Element using j.s 
// document.querySelector('#myButton').onclick = function(){

//     const h1 = document.querySelector('#myH1');
//    // h1.innerText = 'Bye World'

//     //underline this text
//     const underline = document.createElement('u');
//     underline.innerText = 'Bye World'
//     h1.innerText = "";
//     h1.append(underline)


//     //querySelectorAll() ;
//     const p = document.querySelectorAll(".myP");
//     //modify this is a sentence 1
//     // p[0].innerText = 'WHAOOOOOOOOOO'

//     p.forEach(element => element.innerText = 'WAO!')

//     //remove click button
//     const button = document.querySelector('button')
//     button.remove()

//     //i want remove all button 
//     const buttons = document.querySelectorAll('button');
//     button.forEach(element => element.remove())

// }
