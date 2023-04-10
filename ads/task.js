(() => {
    let cases = document.querySelectorAll(".rotator__case");
    let id = 0;
    let timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // setInterval(() => {
    //     cases[id].className = "rotator__case";
    //     id++;
    //     if (id == cases.length) id = 0;
    //     cases[id].className += " rotator__case_active";
    // }, 1000);

    (async () => {
        while(true) {
            cases[id].style.color = cases[id].getAttribute("data-color")
            await timeout(Number(cases[id].getAttribute("data-speed")));
            cases[id].className = "rotator__case";
            id++;
            if (id == cases.length) id = 0;
            cases[id].className += " rotator__case_active";
        };
    })();
})();


