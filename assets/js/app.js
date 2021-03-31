let apolloList=document.querySelectorAll('.timeline');
let apolloName=document.querySelector('.about__text h2');
let apolloYear=document.querySelector('.about__text h3');
let apolloText=document.querySelector('.about__text p');
//HAMBURGER MENU
let hamburger = document.querySelector('.hamburger');
let logo = document.querySelector('.logo');
let elementsNavbar = document.querySelector('.elements__navbar');
let main = document.querySelector('.main');
let navbar = document.querySelector('.navbar');
let hamburger2 = document.querySelectorAll('.elements__navbar a');

for(let i=0; i<apolloList.length; i++){
    apolloList[i].addEventListener('click', (e)=>{
        e.preventDefault();
        if(i==0){
            apolloName.innerHTML="APOLLO 1 <i class='fas fa-rocket'></i></i>";
            apolloYear.textContent="21 February 1967";
            apolloText.textContent="Never launched. On 27 January 1967, a fire in the command module during a launch pad test killed the crew and destroyed the module. This flight was originally designated AS-204, and was renamed to Apollo 1 at the request of the crew's families.";

        }
        if(i==1){
            apolloName.innerHTML="APOLLO 8 <i class='fas fa-rocket'></i></i>";
            apolloYear.innerHTML="21 December 1968";
            apolloText.textContent="First circumlunar flight of CSM, had ten lunar orbits in 20 hours. First crewed flight of Saturn V.";
        }
        if(i==2){
            apolloName.innerHTML="APOLLO 11 <i class='fas fa-rocket'></i></i>";
            apolloYear.innerHTML="16 July 1969";
            apolloText.textContent="First crewed landing in Sea of Tranquility (Tranquility Base) including a single surface EVA.";
        }
        if(i==3){
            apolloName.innerHTML="APOLLO 12 <i class='fas fa-rocket'></i></i>";
            apolloYear.innerHTML="14 November 1969";
            apolloText.textContent="First precise Moon landing in Ocean of Storms near Surveyor 3 probe. Two surface EVAs and returned parts of Surveyor to Earth.";
        }
        if(i==4){
            apolloName.innerHTML="APOLLO 14 <i class='fas fa-rocket'></i></i>";
            apolloYear.innerHTML="31 January 1971";
            apolloText.textContent="Successful Fra Mauro landing. Broadcast first color TV images from lunar surface. Conducted first materials science experiments in space. Conducted two surface EVAs.";
        }
        if(i==5){
            apolloName.innerHTML="APOLLO 17 <i class='fas fa-rocket'></i></i>";
            apolloYear.innerHTML="7 December 1972";
            apolloText.textContent="Landing at Taurus–Littrow. First professional geologist on the Moon. First night launch. Conducted 3 lunar EVAs and one deep space EVA.";
        }
    })
    
}
hamburger.addEventListener('click',(e)=>{
    e.preventDefault();
    logo.classList.toggle('active');
    main.classList.toggle('active');
    hamburger.classList.toggle('active');
    navbar.classList.toggle('best');
    elementsNavbar.classList.toggle('active');
    

})
for(let i=0; i<hamburger2.length; i++){
    hamburger2[i].addEventListener('click', ()=>{
        logo.classList.toggle('active');
        main.classList.toggle('active');
        hamburger.classList.toggle('active');
        navbar.classList.toggle('best');
        elementsNavbar.classList.toggle('active');
    })
}
