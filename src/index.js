import css from "./styles.css";
import menuMain from "./menuMain.module.js";
import menuDrinks from "./menuDrinks.module.js";


function newTab(e){
    if(e.target.dataset['tab']=='all'){
        console.log('all')
    } 
    else if(e.target.dataset['tab']=='main'){
        console.log('main')
    }
    else if(e.target.dataset['tab']=='drinks'){
       console.log('drinks')
    }
}

function bindNavTabs(){
    let navElement = document.querySelectorAll('li');
    for(let element of navElement){
        element.addEventListener('click',newTab);
    }
}

console.log('index.js [ON]');

// menuMain.generatePage();
menuDrinks.generatePage();

bindNavTabs();

//AONDE PAREI:
//continuar função newTab()