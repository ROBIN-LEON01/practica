
const miButon = document.getElementById('miButon');
const buto = document.getElementById('buto');

function togglebuto(){
    if(buto.style.display === 'none'){
        buto.style.display = 'block';
    }
    else{
        buto.style.display = 'none';
    }
}

miButon.addEventListener('click',togglebuto);

// **************************** button-2 *********************************

const inform = document.getElementById('inform');
const butonItem = document.getElementById('butonItem');


function togglebutonItem(){
    if(butonItem.style.display === 'none'){
        butonItem.style.display = 'block';
    }
    else{
        butonItem.style.display = 'none';
    }
}

inform.addEventListener('click',togglebutonItem);

