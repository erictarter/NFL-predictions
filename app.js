const allTeams = document.querySelectorAll('.team');
const afcEast = document.querySelectorAll('.afc-east .team');
const afcWest = document.querySelectorAll('.afc-west .team');
const afcNorth = document.querySelectorAll('.afc-north .team');
const afcSouth = document.querySelectorAll('.afc-south .team');
const nfcEast = document.querySelectorAll('.nfc-east .team');
const nfcWest = document.querySelectorAll('.nfc-west .team');
const nfcNorth = document.querySelectorAll('.nfc-north .team');
const nfcSouth = document.querySelectorAll('.nfc-south .team');
const afcWildCard = document.querySelector('.afc-wildcard-teams');
const nfcWildCard = document.querySelector('.nfc-wildcard-teams');

const afcDivWinners = document.querySelector('.afc-div-winners');
const nfcDivWinners = document.querySelector('.nfc-div-winners');
const afcWildCardin = document.querySelector('.afc-wildcard-in');
const nfcWildCardin = document.querySelector('.nfc-wildcard-in');

const submit = document.querySelector('.submit-button');
const complete = document.getElementById('complete');
const name = document.getElementById('name');
const popup = document.querySelector('.popup');
const finalSubmit = document.getElementById('final-sub');

let allTeamsArr = [];
allTeams.forEach(i => allTeamsArr.push(i));
let afcTeams = allTeamsArr.slice(0, allTeams.length / 2);
let nfcTeams = allTeamsArr.slice(allTeams.length / 2, allTeams.length);

afcTeams.map(i => {
  afcWildCard.innerHTML += `<div class="team ${i.className.slice(
    5,
    i.className.length
  )}">
<img id="${i.className.slice(5, i.className.length)}" src="${
    i.childNodes[1].src
  }" alt="">
</div>`;
});

nfcTeams.map(i => {
  nfcWildCard.innerHTML += `<div class="team ${i.className.slice(
    5,
    i.className.length
  )}">
  <img id="${i.className.slice(5, i.className.length)}" src="${
    i.childNodes[1].src
  }" alt="">
  </div>`;
});

let getAllTeams = document.querySelectorAll('.team');

// ADD WILDCARD TEAMS

submit.addEventListener('click', e => {
  e.preventDefault();
  let confirmSubmit = true;
  //   console.log(picks);
  for (const [key, value] of Object.entries(picks)) {
    if (value === '') {
      confirmSubmit = false;
    }
    divWinners.push(value);
    allPlayofTeams.push(value);
  }
  for (const [key, value] of Object.entries(wcPicks)) {
    if (value === '') {
      confirmSubmit = false;
    }
    finalWc.push(value);
  }

  if (finalWc[0].length !== 3 || finalWc[1].length !== 3) {
    confirmSubmit = false;
  }

  finalWc[0].map(i => {
    allPlayofTeams.push(i);
  });
  finalWc[1].map(i => {
    allPlayofTeams.push(i);
  });

  if (findDuplicates(allPlayofTeams).length === 0 && confirmSubmit) {
    console.log('submit');
    afcDivWinners.value += allPlayofTeams.slice(0, 4);
    nfcDivWinners.value += allPlayofTeams.slice(4, 8);
    afcWildCardin.value += allPlayofTeams.slice(8, 11);
    nfcWildCardin.value += allPlayofTeams.slice(11, 14);

    finalSubmit.value += name.value + ' - ';
    finalSubmit.value += afcDivWinners.value + ' - ';
    finalSubmit.value += nfcDivWinners.value + ' - ';
    finalSubmit.value += afcWildCardin.value + ' - ';
    finalSubmit.value += nfcWildCardin.value + ' - ';

    showPopup(`Thank You ${name.value}!`, 'rgb(63, 136, 63)');
    setTimeout(() => {
      complete.submit();
    }, 2000);

    confirmSubmit = true;
  } else {
    console.log('throw error');
    showPopup(`submission failed! try again..`, 'rgb(208, 68, 68)');
  }
});

let picks = {
  afcEastWinner: '',
  afcWestWinner: '',
  afcNorthWinner: '',
  afcSouthWinner: '',
  nfcEastWinner: '',
  nfcWestWinner: '',
  nfcNorthWinner: '',
  nfcSouthWinner: ''
};

let wcPicks = {
  afcWildCard: [],
  nfcWildCard: []
};

// PUT EAST TEAM AS WINNER

afcEast.forEach(i => {
  i.addEventListener('click', e => {
    let winner = document.getElementById('afc-east-winner');
    let teamImg = document.createElement('img');
    teamImg.src = e.target.src;
    winner.replaceChild(teamImg, winner.childNodes[0]);
    picks.afcEastWinner = e.target.id;
  });
});

afcWest.forEach(i => {
  i.addEventListener('click', e => {
    let winner = document.getElementById('afc-west-winner');
    let teamImg = document.createElement('img');
    teamImg.src = e.target.src;
    winner.replaceChild(teamImg, winner.childNodes[0]);
    picks.afcWestWinner = e.target.id;
  });
});

afcNorth.forEach(i => {
  i.addEventListener('click', e => {
    let winner = document.getElementById('afc-north-winner');
    let teamImg = document.createElement('img');
    teamImg.src = e.target.src;
    winner.replaceChild(teamImg, winner.childNodes[0]);
    picks.afcNorthWinner = e.target.id;
  });
});

afcSouth.forEach(i => {
  i.addEventListener('click', e => {
    let winner = document.getElementById('afc-south-winner');
    let teamImg = document.createElement('img');
    teamImg.src = e.target.src;
    winner.replaceChild(teamImg, winner.childNodes[0]);
    picks.afcSouthWinner = e.target.id;
  });
});

nfcEast.forEach(i => {
  i.addEventListener('click', e => {
    let winner = document.getElementById('nfc-east-winner');
    let teamImg = document.createElement('img');
    teamImg.src = e.target.src;
    winner.replaceChild(teamImg, winner.childNodes[0]);
    picks.nfcEastWinner = e.target.id;
  });
});

nfcWest.forEach(i => {
  i.addEventListener('click', e => {
    let winner = document.getElementById('nfc-west-winner');
    let teamImg = document.createElement('img');
    teamImg.src = e.target.src;
    winner.replaceChild(teamImg, winner.childNodes[0]);
    picks.nfcWestWinner = e.target.id;
  });
});

nfcNorth.forEach(i => {
  i.addEventListener('click', e => {
    let winner = document.getElementById('nfc-north-winner');
    let teamImg = document.createElement('img');
    teamImg.src = e.target.src;
    winner.replaceChild(teamImg, winner.childNodes[0]);
    picks.nfcNorthWinner = e.target.id;
  });
});
nfcSouth.forEach(i => {
  i.addEventListener('click', e => {
    let winner = document.getElementById('nfc-south-winner');
    let teamImg = document.createElement('img');
    teamImg.src = e.target.src;
    winner.replaceChild(teamImg, winner.childNodes[0]);
    picks.nfcSouthWinner = e.target.id;
  });
});

// SELECT WILDCARD
let afcWildCardTeamLogos = document.querySelectorAll(
  '.afc-wildcard-teams .team'
);
let nfcWildCardTeamLogos = document.querySelectorAll(
  '.nfc-wildcard-teams .team'
);

let afcCounter = 1;
let nfcCounter = 1;

afcWildCardTeamLogos.forEach(i => {
  i.addEventListener('click', e => {
    if (afcCounter < 4) {
      let pick = document.getElementById(`afc-wc-${afcCounter}`);
      let teamImg = document.createElement('img');
      teamImg.src = e.target.src;
      pick.appendChild(teamImg);
      afcCounter++;
      wcPicks.afcWildCard.push(e.target.id);
    }
  });
});

nfcWildCardTeamLogos.forEach(i => {
  i.addEventListener('click', e => {
    if (nfcCounter < 4) {
      let pick = document.getElementById(`nfc-wc-${nfcCounter}`);
      let teamImg = document.createElement('img');
      teamImg.src = e.target.src;
      pick.appendChild(teamImg);
      nfcCounter++;
      wcPicks.nfcWildCard.push(e.target.id);
    }
  });
});

// ENLARGE TEAM LOGO ON HOVER

allTeams.forEach(i => {
  i.addEventListener('mouseover', e => {
    e.target.style.transform = 'scale(1.15)';
  });
});
allTeams.forEach(i => {
  i.addEventListener('mouseout', e => {
    e.target.style.transform = 'scale(1)';
  });
});

getAllTeams.forEach(i => {
  i.addEventListener('mouseover', e => {
    e.target.style.transform = 'scale(1.15)';
  });
});

getAllTeams.forEach(i => {
  i.addEventListener('mouseout', e => {
    e.target.style.transform = 'scale(1)';
  });
});

let divWinners = [];
let finalWc = [];
let allPlayofTeams = [];

const findDuplicates = arr => {
  let sorted_arr = arr.slice().sort();
  let results = [];
  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  return results;
};

// POPUP MESSAGE
function showPopup(msg, color) {
  popup.style.display = 'block';
  popup.style.background = color;
  popup.innerText = msg;

  setTimeout(() => {
    popup.style.display = 'none';
    location.reload();
  }, 3000);
}

let nameSub = '';

// GET NAME
name.addEventListener('keydown', () => {
  nameSub = name.value;
  console.log(name.value);
  console.log(nameSub);
});
