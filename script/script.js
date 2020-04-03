const Config = {
    name: "alex",
    host: "gus",
    scale: 1,
    Links: [
        [
            "Clemson",
            [
		["iRoar", "https://iroar.app.clemson.edu/dashboard/"],
                ["email", "https://g.clemson.edu"],
                ["canvas", "https://clemson.instructure.com/"],
            ]
        ],
        [
            "Time Wasters",
            [
                ["screenies", "https://reddit.com/r/unixporn"],
                ["linux", "https://reddit.com/r/linux"],
                ["youtube", "https://youtube.com/feed/subscriptions"]
            ],
            false,
        ],
    ]
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const hosts = document.querySelectorAll("[data-Host]")
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links, Show]) => {
            return (Show == undefined ? `<li>` : `<li class="hideChildren">`) + `
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>`
        }).join("")

        names.forEach(el => {
            el.innerText = Config.name;
        });

        hosts.forEach(el => {
            el.innerText = Config.host;
        })

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
