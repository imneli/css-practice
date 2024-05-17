const $card = document.querySelector('.card');
let bounds;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  }
  const distance = Math.sqrt(center.x**2 + center.y**2);
  
  $card.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance)* 2}deg
    )
  `;
  
  $card.querySelector('.glow').style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width/2}px
      ${center.y * 2 + bounds.height/2}px,
      #ffffff55,
      #0000000f
    )
  `;
}

$card.addEventListener('mouseenter', () => {
  bounds = $card.getBoundingClientRect();
  document.addEventListener('mousemove', rotateToMouse);
});

$card.addEventListener('mouseleave', () => {
  document.removeEventListener('mousemove', rotateToMouse);
  $card.style.transform = '';
  $card.style.background = '';
});

// function medidas(){
//   const contador1 = document.getElementById('contador1');
//   let valor1 = 0;

// //setInterval, os desenvolvedores têm a capacidade de executar determinado código repetidamente em um intervalo de tempo definido
// let tempo1 = setInterval(() => {
//   valor1 += 1;

//   contador1.innerHTML = `${valor1}+`;

//   if (valor1 == 400) {
//     //limpa o intervalo de tempo
//     clearInterval(tempo1);
//   }
// });

// //medidor 2


// const contador2 = document.getElementById('contador2');
//   let valor2 = 0;

// //setInterval, os desenvolvedores têm a capacidade de executar determinado código repetidamente em um intervalo de tempo definido
// let tempo2 = setInterval(() => {
//   valor2 += 1;

//   contador2.innerHTML = `${valor2}+`;

//   if (valor2 == 150) {
//     //limpa o intervalo de tempo
//     clearInterval(tempo2);
//   }
// });


// //medidor 3


// const contador3 = document.getElementById('contador3');
// let valor3 = 0;

// //setInterval, os desenvolvedores têm a capacidade de executar determinado código repetidamente em um intervalo de tempo definido
// let tempo3 = setInterval(() => {
// valor3 += 1;

// contador3.innerHTML = `${valor3}+`;

// if (valor3 == 200) {
//   //limpa o intervalo de tempo
//   clearInterval(tempo3);
// }
// });

// }

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body');
        body.classList.toggle('active');
    })
})

ScrollReveal().reveal('.container-prods', { delay: 500 });

