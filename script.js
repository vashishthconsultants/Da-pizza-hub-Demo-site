/*=========================================================
                PAGE LOADER
=========================================================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".page-loader");

    if (!loader) return;

    loader.style.transition = "opacity .6s ease";

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 600);

});



/*=========================================================
                NAVBAR SCROLL
=========================================================*/

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});



/*=========================================================
                MOBILE MENU
=========================================================*/

const menuButton = document.querySelector(".mobile-toggle");

const navMenu = document.querySelector(".nav-menu");

menuButton.addEventListener("click",()=>{

    navMenu.classList.toggle("mobile-open");

    menuButton.classList.toggle("active");

});

document.querySelectorAll(".nav-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("mobile-open");

        menuButton.classList.remove("active");

    });

});



/*=========================================================
                SMOOTH SCROLL
=========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(!target) return;

        window.scrollTo({

            top:target.offsetTop-110,

            behavior:"smooth"

        });

    });

});



/*=========================================================
                HERO COUNTERS
=========================================================*/

const counters=document.querySelectorAll("[data-target]");

const counterObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter=entry.target;

            const target=+counter.dataset.target;

            let current=0;

            const increment=Math.ceil(target/120);

            function update(){

                current+=increment;

                if(current<target){

                    counter.innerText=current;

                    requestAnimationFrame(update);

                }

                else{

                    counter.innerText=target+"+";

                }

            }

            update();

            counterObserver.unobserve(counter);

        }

    });

},{threshold:.6});

counters.forEach(counter=>counterObserver.observe(counter));



/*=========================================================
                SCROLL REVEAL
=========================================================*/

const reveals=document.querySelectorAll(

".featured-card,.why-card,.review-card,.contact-card,.location-card,.highlight-card,.stat-item,.menu-wrapper,.order-wrapper,.hero-content,.hero-media"

);

reveals.forEach(el=>{

    el.classList.add("reveal");

});

const revealObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{

    threshold:.15

});

reveals.forEach(el=>{

    revealObserver.observe(el);

});



/*=========================================================
                MENU MODAL
=========================================================*/

const modal=document.getElementById("menuModal");

const openBtn=document.getElementById("openMenu");

const closeBtn=document.getElementById("closeMenu");

openBtn.addEventListener("click",()=>{

    modal.classList.add("active");

    document.body.style.overflow="hidden";

});

closeBtn.addEventListener("click",()=>{

    modal.classList.remove("active");

    document.body.style.overflow="";

});

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.classList.remove("active");

        document.body.style.overflow="";

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        modal.classList.remove("active");

        document.body.style.overflow="";

    }

});
/*=========================================================
                ACTIVE NAVIGATION
=========================================================*/

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



/*=========================================================
                BUTTON RIPPLE EFFECT
=========================================================*/

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = this.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";

        ripple.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});



/*=========================================================
                HERO IMAGE PARALLAX
=========================================================*/

const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

    if (!heroImage) return;

    let offset = window.scrollY * 0.08;

    heroImage.style.transform = `translateY(${offset}px)`;

});



/*=========================================================
                FLOATING BUTTON VISIBILITY
=========================================================*/

const floatingButtons = document.querySelector(".floating-buttons");

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

        floatingButtons.style.opacity = "1";

        floatingButtons.style.pointerEvents = "all";

        floatingButtons.style.transform = "translateY(0)";

    }

    else {

        floatingButtons.style.opacity = "0";

        floatingButtons.style.pointerEvents = "none";

        floatingButtons.style.transform = "translateY(30px)";

    }

});



/*=========================================================
                IMAGE HOVER GLOW
=========================================================*/

document.querySelectorAll(".featured-card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background = `radial-gradient(circle at ${x}px ${y}px,
        rgba(246,178,26,.12),
        #ffffff 60%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#ffffff";

    });

});



/*=========================================================
                CURRENT YEAR
=========================================================*/

const year = document.querySelector(".current-year");

if (year) {

    year.textContent = new Date().getFullYear();

}



/*=========================================================
                PERFORMANCE
=========================================================*/

window.addEventListener("pageshow", () => {

    document.body.classList.add("loaded");

});



/*=========================================================
                END
=========================================================*/

console.log(

    "%cDa Pizza Hub Website Loaded Successfully",

    "color:#C62828;font-size:16px;font-weight:bold;"

);