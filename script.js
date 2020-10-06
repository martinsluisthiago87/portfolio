var hamburguer = document.querySelector('.hamburguer');
console.log(hamburguer);

// toggle -> O efeito revelar / esconder

hamburguer.addEventListener('click', function () {
    // var sidebar = document.querySelector('.sidebar').classList.toggle('show-menu');
    var sidebar = document.querySelector('.container').classList.toggle('show-menu');
})