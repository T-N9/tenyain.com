const desktopMenuBtn= document.getElementById('menu-toggleBtn-desktop');
const mobileMenuBtn= document.getElementById('menu-toggleBtn-mobile');

const body=document.querySelector('body');
const navOverlay= document.querySelector('.nav-overlay');
const percentage= document.getElementById('progress');
// Desktop Icons
const maximize=document.querySelector('.maximize-icon');

const mainSection=document.querySelector('.main');
const nav=document.querySelector('.nav');
const sni=document.querySelectorAll('.sni');
const mi=document.querySelectorAll('.mi');

window.addEventListener('load', (event) => {
    console.log('Window is loaded');
    setTimeout(() => {
        nav.classList.remove('d-md-none');
        console.log('Nav is loaded');
    }, 300);
});

// function loader(){
//     var i=0;
//     while (i<=100) {
//         percentage.innerHTML=i;
//     }
// }
// loader();









function changeTheme(){
    body.classList.toggle('light-theme');   
}
// Maximize to Side Nav
function max_to_sn(){
    var i;
    maximize.classList.add('maximize-off');
    maximize.classList.remove('maximize-on');

    maximize.classList.remove('side-nav-off');

    mainSection.classList.add('full-main');
    nav.classList.add('nav-off');

    for (i = 0; i < sni.length; i++) {
        sni[i].style.display = "inline-block";
    }
    setTimeout(() => {
        for (i = 0; i < mi.length; i++) {
            mi[i].style.display = "none";
        }
        maximize.classList.add('side-nav-on');
    }, 300);

    desktopMenuBtn.classList.remove('toggle-max');
    desktopMenuBtn.classList.add('toggle-sn');
}

function sn_to_max(){
    var i;
    maximize.classList.add('side-nav-off');
    maximize.classList.remove('side-nav-on');

    maximize.classList.remove('maximize-off');
    
    mainSection.classList.remove('full-main');
    nav.classList.remove('nav-off');

    for (i = 0; i < mi.length; i++) {
        mi[i].style.display = "inline-block";
    }
    setTimeout(() => {
        for (i = 0; i < sni.length; i++) {
            sni[i].style.display = "none";
        }
        maximize.classList.add('maximize-on');
    }, 300);

    desktopMenuBtn.classList.remove('toggle-sn');
    desktopMenuBtn.classList.add('toggle-max');
}

desktopMenuBtn.onclick=function(){

    if(this.classList.contains('toggle-max')){
        max_to_sn();
    }
    else{
        sn_to_max();
    }
}

mobileMenuBtn.onclick=function(){
    nav.classList.toggle('x-full-scale');
    nav.classList.toggle('x-no-scale');
    navOverlay.classList.toggle('open-overlay');
    body.classList.toggle('no-overflow');
}

navOverlay.onclick=function(){
    if(nav.classList.contains('x-full-scale')){
        nav.classList.remove('x-full-scale');
        nav.classList.add('x-no-scale');
        this.classList.remove('open-overlay');
        body.classList.toggle('no-overflow');
    }
}





