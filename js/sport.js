const searchPlayer = () => {

    // meal search area
    const searchFiled = document.getElementById('search-filed')
    const searchText = searchFiled.value;
    searchFiled.value = ''

    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.teams))
}

searchPlayer()

// meal search result

const displaySearchResult = teams => {
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = ''
    const spin = document.getElementById('spin')
    spin.style.display = "none"
    teams.forEach(team => {


        const div = document.createElement('div');
        div.classList.add('col');

        div.innerHTML = `
    <div onclick ="teamDetails(${team.idTeam})" class="card h-100 shadow">
        <img src="${team.strTeamBadge}" class="p-5" alt="...">
        <div class="card-body ">
            <h3 class="card-title">Team: ${team.strTeam}</h3>
            <h5 class="card-title">League: ${team.strLeague}</h5>
            <h5 class="card-title">League2: ${team.strLeague2}</h5>
            <p class="card-text">${team.strDescriptionEN.slice(0, 150)}</p>
            
            
        </div>
        
    </div>
        `
        searchResult.appendChild(div)
    });
}

const teamDetails = teamId => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayteamDetails(data.teams[0]))
}

const displayteamDetails = team => {
    const teamDetails = document.getElementById('team-details')
    teamDetails.textContent = ''
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${team.strTeamBadge}" class=" p-5" alt="...">
    <div class="card-body">
        <h5 class="card-title">Team: ${team.strTeam}</h5>
        <p ${team.strDescriptionEN.slice(0, 150)}</p>
        <a href="${team.strTeamJersey}" class="btn btn-primary">Go somewhere</a>
    </div>
    `
    teamDetails.appendChild(div)
}