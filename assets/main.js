// const dateBox = document.getElementById("dateBox");



// function showToday() {
//     const today = new Date();
//     dateBox.style.animation = 'none';
//     dateBox.offsetHeight; // restart animation
//     dateBox.style.animation = 'fade 0.5s ease';
//     dateBox.textContent = today.toLocaleDateString('en-US', {
//         weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
//     })
// }

// showToday();

// // every 30 seconds check if the day has changed, and update automatically
// let lastDay = new Date().toDateString();
// setInterval(() => {
//     const nowDay = new Date().toDateString();
//     if (nowDay !== lastDay) {
//         lastDay = nowDay;
//         showToday();
//     }
// }, 30000);


  const dayHalf = document.getElementById('dayHalf');
  const dateHalf = document.getElementById('dateHalf');
 
  function showToday(){
    const today = new Date();
    dayHalf.textContent = today.toLocaleDateString('en-US', { weekday: 'long' });
    dateHalf.textContent = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
 
  showToday();
 
  // every 30 seconds check if the day has changed, and update automatically
  let lastDay = new Date().toDateString();
  setInterval(() => {
    const nowDay = new Date().toDateString();
    if(nowDay !== lastDay){
      lastDay = nowDay;
      showToday();
    }
  }, 30000);