const btn = document.getElementById( "nav_menu_btn_id" );
const links = document.getElementById( "nav_links_id" ); 
const menu_icon = document.querySelector( "i" );

btn.addEventListener( "click", (e) => {
    links.classList.toggle("open");

    const isOpen = links.classList.contains("open" );
    menu_icon.setAttribute( "class", isOpen ? "ri-close-line" : "ri-menu-line" );
});

links.addEventListener( "click", (e)=>{
    links.classList.remove( "open" );
    menu_icon.setAttribute( "class", "ri-menu-line" );
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

ScrollReveal().reveal(".header_img img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header_content h2", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".header_content .header_btn", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".header_content .socials", {
    ...scrollRevealOption,
    delay: 2500,
});

ScrollReveal().reveal(".header_bar", {
    ...scrollRevealOption,
    delay: 3000,
});