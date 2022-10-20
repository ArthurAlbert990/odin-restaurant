import css from "./styles.css";
import menuMain from "./menuMain.module.js";
import menuDrinks from "./menuDrinks.module.js";

function newTab(e){
    if(e.target.dataset['tab']=='all'){
        console.log('all');
        menuMain.generatePage();
        menuDrinks.generatePage();
        bindNavTabs();
    } 
    else if(e.target.dataset['tab']=='main'){
        console.log('main')
        menuMain.generatePage();
        bindNavTabs();
    }
    else if(e.target.dataset['tab']=='drinks'){
       console.log('drinks')
       menuDrinks.generatePage();
       bindNavTabs();
    }
}

//variables
let navElement
/**
 * Dynamically inserts the new elements
 */
function bindNavTabs(){
    navElement = document.querySelectorAll('li');
    for(let element of navElement){
        element.addEventListener('click',newTab);
    }
}

console.log('index.js [ON]');

menuMain.generatePage();
//menuDrinks.generatePage();

bindNavTabs();

//AONDE PAREI:
//continuar função newTab(), all
//all possui um bug, como toda vez que gera uma nova aba, ele apaga a anterior
//ele não mantém o menu main ou drinks.