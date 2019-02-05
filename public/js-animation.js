window.addEventListener('load', () => {
  const startAnimButton = document.getElementById('startAnimButton');
  const theBox = document.getElementById('the-box');
  startAnimButton.addEventListener('click', toggleAnimation);
  
  let animationId;
  let boxX = 100, boxY = 100;
  let velX = 0, velY = 0;

  function toggleAnimation() {
    if (animationId == undefined) {
      animation();
      startAnimButton.textContent = 'stop';
    }
    else {
      cancelAnimationFrame(animationId);
      animationId = undefined;
      startAnimButton.textContent = 'start';
    }
  }

  function animation() {
    boxX += velX;
    boxY += velY;

    velX = Math.random();
    velY = Math.random();

    theBox.style.transform = `translate(${boxX}px, ${boxY}px)`;
    animationId = requestAnimationFrame(animation);
  }
});
