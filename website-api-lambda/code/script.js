function unlockWorm(event) {
  event.preventDefault();

  // 1) Swap to unlocked worm image
  const logo = document.getElementById('wormLogo');
  logo.src = 'images/worm-unlock.png';
  logo.style.filter = 'none';

  // 2) Hide login form
  event.target.style.display = 'none';

  // 3) Show unlock message
  document.getElementById('unlockMessage').style.display = 'block';

  // 4) Show architecture image
  document.getElementById('archImage').style.display = 'block';

  // 5) Call Lambda via API Gateway
  fetch('https://mkd14eg0w7.execute-api.us-east-1.amazonaws.com/prod/visit')
    .then((res) => res.json())
    .then((data) => {
      const msg = document.getElementById('lambdaResponse');
      msg.textContent = `${data.message} (from ${data.ip})`;
      msg.style.display = 'block';
    })
    .catch(console.error);
}
