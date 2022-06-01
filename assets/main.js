const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.navbar-nav, .banner-title');
sr.reveal('.container', {delay:900, origin:'bottom'})
sr.reveal('.intro, .skills', {delay:700})
sr.reveal('.articles, .works', {delay:900})