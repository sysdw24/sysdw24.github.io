const showMoreButton1 = document.getElementById("show-more1");
const text1 = document.getElementById("keynote-text1");

const showMoreButton2 = document.getElementById("show-more2");
const text2 = document.getElementById("keynote-text2");

const showMoreButton3 = document.getElementById("show-more3");
const text3 = document.getElementById("keynote-text3");

showMoreButton1.addEventListener('click', (e)=>{
    text1.classList.toggle('hidden');
    if(showMoreButton1.innerText === 'Show details ▶'){
        showMoreButton1.innerText = 'Show less ▴';
    }else{
        showMoreButton1.innerText = 'Show details ▶';
    }
}
)

showMoreButton2.addEventListener('click', (e)=>{
    text2.classList.toggle('hidden');
    if(showMoreButton2.innerText === 'Show details ▶'){
        showMoreButton2.innerText = 'Show less ▴';
    }else{
        showMoreButton2.innerText = 'Show details ▶';
    }
}
)
showMoreButton3.addEventListener('click', (e)=>{
    text3.classList.toggle('hidden');
    if(showMoreButton3.innerText === 'Show details ▶'){
        showMoreButton3.innerText = 'Show less ▴';
    }else{
        showMoreButton3.innerText = 'Show details ▶';
    }
}
)