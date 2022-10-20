 export default {generatePage} //export object with generatePage function

console.log('menuMain.module.js [ON]');

/**
 * menuMain responsible for generating the webpage content.
 * menuMain {object} stores the HTML for menu page section, category "main"
 * menuDrinks {object} stores the HTML for menu "drinks"
 * For DEMO purpose, it is already filled with subsequent children elements.
 */
const menuMain={
    hero:{
        type:'section',
        class:'hero',
        inner:
        `<div class="restaurant-name">
            <p>La Caravana</p>
        </div>`},

    menuMain:{
        type:'section',
        class:'menu',
        inner:
        `<div class="menu-header">
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
                <div class="card-img1"></div>
                <div class="card-content">
                    <p class="card-title">LOREM IPSUM</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.</p>
                </div>
            </div>
            <div class="menu-card">
                <div class="card-img2"></div>
                <div class="card-content">
                    <p class="card-title">LOREM IPSUM</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.</p>
                </div>
            </div>
            <div class="menu-card">
                <div class="card-img1"></div>
                <div class="card-content">
                    <p class="card-title">LOREM IPSUM</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.</p>
                </div>
            </div>
            <div class="menu-card">
                <div class="card-img2"></div>
                <div class="card-content">
                    <p class="card-title">LOREM IPSUM</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.</p>
                </div>
            </div>
            <div class="menu-card">
                <div class="card-img1"></div>
                <div class="card-content">
                    <p class="card-title">LOREM IPSUM</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.</p>
                </div>
            </div>
            <div class="menu-card">
                <div class="card-img2"></div>
                <div class="card-content">
                    <p class="card-title">LOREM IPSUM</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.</p>
                </div>
            </div>
            <div class="menu-card">
                <div class="card-img1"></div>
                <div class="card-content">
                    <p class="card-title">LOREM IPSUM</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.</p>
                </div>
            </div>
            <div class="menu-card">
                <div class="card-img2"></div>
                <div class="card-content">
                    <p class="card-title">LOREM IPSUM</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.</p>
                </div>
            </div>
        </div>`
    },

    find:{
        type: 'section',
        class: 'find-us',
        inner:
        `
        <div class="find-us-header">
                <p class="title">FIND US</p>
            </div>
            <div class="find-us-content">
                <div class="map">
                    <div style="width: 100%"><iframe width="100%" height="100%" frameborder="0" scrolling="no"marginheight="0" marginwidth="0" 
                            src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(NY%20pizza)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        </iframe>
                    </div>
                </div>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.<br>
                        <br>ATTENDANCE<br>
                        Monday to Sunday  12:00pm - 8:00pm
                        <br>
                        DELIVERY<br>
                        Monday - Sunday  12:00pm - 8:00pm
                    </p>
                </div>
            </div>
        </section>
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
    contentElement.innerHTML=''; // reset content
    for(let key in menuMain){
        element = document.createElement(menuMain[key]['type']);
        element.classList.add(menuMain[key]['class']);
        element.innerHTML = menuMain[key].inner;
        contentElement.appendChild(element);
        console.log(`Generated: ${key}`)
    }
}


//FOR DEMO PURPOSE, START WITH EMPTY PAGE:
contentElement.innerHMTL='';

//reminder: each menu page "tab/page" should be a module.


