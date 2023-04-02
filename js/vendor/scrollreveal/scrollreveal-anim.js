// Scroll reveal
window.sr = ScrollReveal();

for (var index = 1; index < 11; index++) {
    var delay = 120;
    // fade in up
    sr.reveal('.sr-up-' + index, {
        delay: delay * index,
        scale: 1,
        distance: '24px',
        easing: 'ease-in',
    });
    // fade in down
    sr.reveal('.sr-down-' + index, {
        delay: delay * index,
        scale: 1,
        distance: '-24px',
    });
    // zoom in
    sr.reveal('.sr-zoomin-' + index, {
        delay: delay * index,
        scale: 0.8,
        distance: '0',
    });
    // zoom out
    sr.reveal('.sr-zoomout-' + index, {
        delay: delay * index,
        scale: 1.2,
        distance: '0',
        duration: 600,
        easing: 'ease-out',
    });
    // grid anim
    
    sr.reveal('.sr-grid .item', {
        delay: delay ,
        scale: 1.2,
        distance: '0',
        easing: 'ease-out',
    });
}