let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    faq.classList.remove('active');
    
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    faq.classList.remove('active');
}

let faq= document.querySelector('.faq-info');

document.querySelector('#info-btn').onclick = () =>{
    faq.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    faq.classList.remove('active');

}