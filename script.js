const sections=document.querySelectorAll('.reveal');

function show(){
sections.forEach(s=>{
const top=s.getBoundingClientRect().top;
if(top<window.innerHeight-100){
s.classList.add('active');
}
});
}

window.addEventListener('scroll',show);
show();

const menu=document.getElementById('menuBtn');
const nav=document.getElementById('navList');

menu.onclick=()=>{
nav.style.display=nav.style.display==='flex'?'none':'flex';
};
