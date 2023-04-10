(() => {
    const size = document.querySelectorAll(".font-size");
    const color = document.querySelectorAll(".color");
    
    // Change font-size
    for (let i=0; i<size.length; i++) {
        size[i].onclick = (() => {
            document.querySelector(".font-size_active").className = document.querySelector(".font-size_active").className.replace(" font-size_active", "");
            size[i].className += " font-size_active";
            
            if(size[i].getAttribute("data-size") !== null) {
                document.querySelector(".book").style.fontSize = size[i].getAttribute("data-size");
            } else {
                document.querySelector(".book").style.fontSize = "medium"
            };
            return false;
        });
    };
    
     // Change color
    for (let i=0; i<color.length; i++) {
        color[i].onclick = (() => {
            if (color[i].parentElement.className === "book__control book__control_color"){
                //text color
                document.querySelectorAll(".color_active")[0].className = document.querySelectorAll(".color_active")[0].className.replace(" color_active", "");
                color[i].className += " color_active";
                document.querySelector(".book").style.color = color[i].getAttribute("data-text-color");
            } else {
                //background color
                document.querySelectorAll(".color_active")[1].className = document.querySelectorAll(".color_active")[1].className.replace(" color_active", "");
                color[i].className += " color_active";
                document.querySelector(".book").style.backgroundColor = color[i].getAttribute("data-bg-color");
            };
            return false;
        });
    };
})();