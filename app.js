//* TEAMS SETTINGS 
let teamOnePlayers = [];
let teamTwoPlayers = [];

teamOne = () => {
    const teamOneInput = document.querySelector('#team-one-players').value;
    teamOnePlayers = teamOneInput.split('\n');

    let td = `<tr id="team-one-players-all"><td class='team-one-lineups'>`;
    teamOnePlayers.forEach((player) => {
        td += `<p class="players-box">${player}</p>`;
    })
    td += `</tr></td>`;
    document.getElementById('screen-one').innerHTML = td;
}

teamTwo = () => {
    const teamTwoInput = document.querySelector('#team-two-players').value;
    teamTwoPlayers = teamTwoInput.split('\n');

    let subs = `<td class='team-two-lineups'>`;
    teamTwoPlayers.forEach((player) => {
        subs += `<p class="subs">${player}</p>`;
    })
    subs += `</td>`;
    document.getElementById('team-one-players-all').innerHTML += subs;
}

dropTeams = () => {
    teamOnePlayers = [];
    teamTwoPlayers = [];
    let teamOne = document.querySelector('.team-one-lineups');
    teamOne.innerHTML = '';

    let teamTwo = document.querySelector('.team-two-lineups');
    teamTwo.innerHTML = '';
}

document.getElementById('team-one-add').addEventListener('click', () => {
    teamOne();
    teamTwo();
})

document.getElementById('drop-teams').addEventListener('click', () => {
    dropTeams();
})

// * SCREEN CONTROL
setTeamsMainToScreen = () => {
    let screens = document.querySelector('.screens');
    screens.style.flexDirection = 'row';
}

setScoreBoardToMainScreen = () => {
    let screens = document.querySelector('.screens');
    screens.style.flexDirection = 'row-reverse';
}

document.querySelector('.activate-screen-one').addEventListener('click', () => {
    setTeamsMainToScreen();
})

document.querySelector('.activate-screen-two').addEventListener('click', () => {
    setScoreBoardToMainScreen();
})

///////// BACKGROUND CHANGE //////////
screenOneBgChange = () => {
    color = document.querySelector('.screen-one-bg').value;
    document.querySelector('.teams').style.backgroundColor = color;
}

screenTwoBgChange = () => {
    color = document.querySelector('.screen-two-bg').value;
    // console.log(screenOne);
    document.querySelector('.screen2').style.backgroundColor = color;
}

document.querySelector('#screen-one-bg').addEventListener('change', () => {
    screenOneBgChange();
})

document.querySelector('#screen-two-bg').addEventListener('change', () => {
    screenTwoBgChange();
})


/* Jedinstvo Ub
23 Danilo
21 damjan
22 Dimtijre
1 Pera Peric
2 Miki Maus
3 Paja Patak
1 Pera Peric
2 Miki Maus
3 Paja Patak
1 Pera Peric
2 Miki Maus */