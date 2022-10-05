//checkFooter();
window.onresize = checkFooter();

function checkFooter() {
  const mediaQuery = window.matchMedia('(max-width: 600px)');
  if (mediaQuery.matches) {
    alert('heyHEY!');
  }
}