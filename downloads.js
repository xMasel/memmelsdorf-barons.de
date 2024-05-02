let jsonFilePath = "matches_2023.json";
let ul = document.getElementById("sheetList")

fetch(jsonFilePath)
    .then(response => response.json())
    .then(data => {
        data.forEach(function(match) {
            if (match["home_team_name"] === "Memmelsdorf Barons") {
                let dateString = match["time"]
                let date = new Date(dateString)
                let germanDate = date.toLocaleString("de-DE")
                let li = document.createElement("li");
                let liContent = "Heimspiel vom " + germanDate + " Uhr gegen " + match["away_team_name"];
                let a = document.createElement("a");
                a.href = match["scoresheet_url"];
                a.target = "_blank"
                a.textContent = "Link";

                li.appendChild(document.createTextNode(liContent));
                ul.appendChild(li);
                ul.appendChild(a)
            }
            else {
                let dateString = match["time"]
                let date = new Date(dateString)
                let germanDate = date.toLocaleString("de-DE")
                let li = document.createElement("li");
                let liContent = "Auswärtsspiel vom " + germanDate + " Uhr in " + match["home_team_name"];
                let a = document.createElement("a");
                a.href = match["scoresheet_url"];
                a.target = "_blank"
                a.textContent = "Link";

                li.appendChild(document.createTextNode(liContent));
                ul.appendChild(li);
                ul.appendChild(a)
            };
        });
    })
    .catch(error => console.error("Fehler: ", error));