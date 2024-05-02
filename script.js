
function fetch_nextmatch_ll() {
    fetch('https://www.memmelsdorf-barons.de/cgi-bin/bsm.cgi/nextmatchll/')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data[2] === 'Memmelsdorf Barons') {
                document.getElementById('gameDayLL').innerHTML = data[0]
                document.getElementById('gameTimeLL').innerHTML = data[1]
                document.getElementById('gameLocationLL').innerHTML = 'zuhause'
                document.getElementById('enemyTeamLL').innerHTML = data[3]
            }
            else {
                document.getElementById('gameDayLL').innerHTML = data[0]
                document.getElementById('gameTimeLL').innerHTML = data[1]
                document.getElementById('gameLocationLL').innerHTML = 'auswärts'
                document.getElementById('enemyTeamLL').innerHTML = data[2]
            }
        })
        .catch(error => {
            console.error('Fehler: ', error)
        })
}

function fetch_nextmatch_lk() {
    fetch('https://www.memmelsdorf-barons.de/cgi-bin/bsm.cgi/nextmatchlk/')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data[2] === 'Memmelsdorf Barons  2') {
                document.getElementById('gameDayLK').innerHTML = data[0]
                document.getElementById('gameTimeLK').innerHTML = data[1]
                document.getElementById('gameLocationLK').innerHTML = 'zuhause'
                document.getElementById('enemyTeamLK').innerHTML = data[3]
            }
            else {
                document.getElementById('gameDayLK').innerHTML = data[0]
                document.getElementById('gameTimeLK').innerHTML = data[1]
                document.getElementById('gameLocationLK').innerHTML = 'auswärts'
                document.getElementById('enemyTeamLK').innerHTML = data[2]
            }
        })
        .catch(error => {
            console.error('Fehler: ', error)
        })
}

window.onload = function() {
    fetch_nextmatch_ll()
    fetch_nextmatch_lk()
}
