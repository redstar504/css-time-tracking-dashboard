fetch("./data.json")
    .then(response => response.json())
    .then(jsonData => init(jsonData));

function init(jsonData) {
    const navItems = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('article section');

    navItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
            document.getElementById("activePeriod").id = "";
            navItem.id = "activePeriod";
            let period = navItem.getAttribute('data-key');
            // index from the JSON will correspond to the section index
            jsonData.forEach((datum, i) => {
                // set the `current` value
                sections[i].querySelector("strong b").innerText = datum.timeframes[period].current;
                // set the `previous` value
                sections[i].querySelector("small b").innerText = datum.timeframes[period].previous;
            })
        });
    });
}

