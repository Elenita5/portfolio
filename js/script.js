const icone = document.querySelector("#icon");
const nav = document.querySelector("#nav");
const links = document.querySelectorAll("nav li");
const header = document.querySelector('header');


icone.addEventListener('click', ()=> {
    nav.classList.toggle('active');
});
console.log(nav)

links.forEach((link)=> {
    link.addEventListener('click', ()=> {
        nav.classList.remove('active');
    })
})
