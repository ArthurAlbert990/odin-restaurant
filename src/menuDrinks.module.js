export default {generatePage} //export object generatePage function

console.log('menuDrinks.module.js [ON]');


const menuDrinks= {
    hero:{
        type:'section',
        class:'hero',
        inner:
        `<div class="restaurant-name">
            <p>La Caravana</p>
        </div>`},

    menuDrinks:{
        type: 'section',
        class: 'menu',
        inner:
            `
            <div class="menu-header">
                <p class="title">OUR MENU</p>
            </div>
            <div class="nav">
                <ul>
                    <li data-tab='all'>ALL</li>
                    <li data-tab='main'>MAIN</li>
                    <li data-tab='drinks'>DRINKS</li>
                </ul>
            </div>
            <div class="menu-content">
                <div class="menu-card">
                    <div class="card-img1 drinks"></div>
                    <div class="card-content">
                        <p class="card-title drinks">LOREM IPSUM</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.</p>
                    </div>
                </div>
                <div class="menu-card">
                    <div class="card-img2 drinks"></div>
                    <div class="card-content">
                        <p class="card-title drinks">LOREM IPSUM</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.</p>
                    </div>
                </div>
            </div> 
            `
        },
}

let element;
const contentElement = document.querySelector('.content');
/**
 * Dynamically inserts the new elements
 */
function generatePage(){
    console.log('generatePage')
    contentElement.innerHMTL=''; // reset content
    for(let key in menuDrinks){
        element = document.createElement(menuDrinks[key]['type']);
        element.classList.add(menuDrinks[key]['class']);
        element.innerHTML = menuDrinks[key].inner;
        contentElement.appendChild(element);
        console.log(`Generated: ${key}`)
    }
}