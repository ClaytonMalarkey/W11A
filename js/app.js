let fire = {
    name:'fire',
    img_ulr:'/imgs/fire.jpg',
    description:'hot destructive and powerful'
}
let water = {
    name:'water',
    img_ulr:'imgs/water.jpg',
    description:'source of life and healing'
}
let grass = {
    name: 'grass',
    img_ulr:'imgs/grass.jpg',
    description:'living and source of energy'
}

function firebuttonClicked(){
    let fire_json = JSON.stringify(fire);
    Cookies.set(`element`, fire_json);
}

const firebutton = document.getElementById("fire");
console.log(firebutton);
firebutton.addEventListener(`click`, firebuttonClicked);

function waterbuttonClicked(){
    let water_json = JSON.stringify(water);
    Cookies.set(`element`, water_json);
}

const waterbutton = document.getElementById("water");
waterbutton.addEventListener(`click`, waterbuttonClicked);

function grassbuttonClicked(){
    let grass_json = JSON.stringify(grass);
    Cookies.set(`element`, grass_json);
}

const grassbutton = document.getElementById("grass");
grassbutton.addEventListener(`click`, grassbuttonClicked);