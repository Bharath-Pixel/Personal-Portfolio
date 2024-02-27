const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const shadowHeader = () =>{
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('shadow-header'); 
    else header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader);

// To show the active link
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)



const scrollUpButton = document.getElementById('scroll-up');

// To show the scroll up button
const scrollUp = () => {
    if (scrollUpButton) {
        window.scrollY >= 350 ? scrollUpButton.classList.add('show-scroll')
                              : scrollUpButton.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);

// Add event listener to scroll-up button
if (scrollUpButton) {
    scrollUpButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


// Scrollreveal animation

const sr = ScrollReveal({
	origin: 'top',
	distance: '80px',
	duration: 1800,
	delay: 200,
	reset: false

})

sr.reveal('.home_perfil,.about_image,.contact_mail', {origin: 'right'});
sr.reveal('.home_name, .home_info, .about_container .section_title-1, .about_info, .contact_social, .contact_data', {origin: 'left'});

sr.reveal('.services_card, .projects_card', {interval:100});