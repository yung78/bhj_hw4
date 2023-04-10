let text = document.querySelectorAll(".reveal");

function onWindow(element) {
    
    for(let i=0; i<element.length; i++) {
       let {top, bottom} = element[i].getBoundingClientRect();
    
       if ((bottom > 0) && (top < window.innerHeight)) {
        element[i].className = "reveal reveal_active";
       } else {element[i].className = "reveal"};
    };
};

setInterval((() => onWindow(text)), 1000);