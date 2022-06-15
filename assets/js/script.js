function gamesOption() {
  const gamesSection = document.getElementById('games');
  const games = ['jokenpo', 'ticTacToe', 'oddOrEven'];
}

function newgameReturnButton() {
  const menuSection = document.getElementById('menu');
  const newgameSection = document.getElementById('newgame-option');
  menuSection.style.display = 'flex';
  newgameSection.style.display = 'none';
}

function newgameMenuButton() {
  const menuSection = document.getElementById('menu');
  const newgameSection = document.getElementById('newgame-option');
  menuSection.style.display = 'none';
  newgameSection.style.display = 'flex';
}

function joinReturnButton() {
  const menuSection = document.getElementById('menu');
  const joinSection = document.getElementById('join-option');
  menuSection.style.display = 'flex';
  joinSection.style.display = 'none';
}

function joinMenuButton() {
  const menuSection = document.getElementById('menu');
  const joinSection = document.getElementById('join-option');
  menuSection.style.display = 'none';
  joinSection.style.display = 'flex';
}

function buttonsFunctions() {
  document.getElementById('join-menu').addEventListener('click', joinMenuButton);
  document.getElementById('join-return').addEventListener('click', joinReturnButton);
  document.getElementById('newgame-menu').addEventListener('click', newgameMenuButton);
  document.getElementById('newgame-return').addEventListener('click', newgameReturnButton);
}

window.onload = () => {
  buttonsFunctions();
  gamesOption();
}
