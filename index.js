function addingEventListener() {
  const input = document.getElementById('input');
  if (input) {
    input.addEventListener('click', function() {
      alert('I was clicked!');
    });
  } else {
    console.error('Input element not found');
  }
}
addingEventListener();
