element_json = Cookies.get(`element`);

if(element_json === undefined){
    document.body.insertAdjacentHTML('beforeend', '<h1>go back and make a selection from homepage</h1>');
}

let element = JSON.parse(element_json);

if(element){
    document.body.insertAdjacentHTML(`beforeend`, `<h1>${element[`name`]}</h1>`);
    document.body.insertAdjacentHTML(`beforeend`, `<img src=${element[`img_ulr`]}>`);
    document.body.insertAdjacentHTML(`beforeend`, `<p>${element['description']}</p>`);
}
