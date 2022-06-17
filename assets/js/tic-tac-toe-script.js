function sortStartTeam() {
  const teams = ['o-team', 'x-team'];
  const selectedTeam = document.getElementById(teams[Math.floor(Math.random() * 2)]);
  selectedTeam.style.opacity = '100%';
  if (selectedTeam.innerText === 'O') {
    return 'o';
  }
  return 'x';
}

let currentTeam = sortStartTeam();

function choose(object) {
  const teamO = document.getElementById('o-team');
  const teamX = document.getElementById('x-team');
  const currentSquare = object.target;
  if (currentSquare.children.length === 0 && currentSquare.className === 'square') {
    const teamPlayed = document.createElement('span');
    teamPlayed.classList.add('choose');
    if (currentTeam === 'o') {
      teamPlayed.classList.add('circle');
      teamPlayed.innerText = 'O';
      currentTeam = 'x';
      teamO.style.opacity = '20%';
      teamX.style.opacity = '100%';
    } else {
      teamPlayed.classList.add('axis');
      teamPlayed.innerText = 'X';
      currentTeam = 'o';
      teamX.style.opacity = '20%';
      teamO.style.opacity = '100%';
    }
    currentSquare.appendChild(teamPlayed);
  }
}

window.onload = () => {
  const squares = document.querySelectorAll('.square');
  for (let square of squares) {
    square.addEventListener('click', choose);
  }
}
