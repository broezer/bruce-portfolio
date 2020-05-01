var waypoint = new Waypoint({
  element: document.getElementById('natuurpodium'),
  handler: function() {
    console.log('Natuurpodium waypoint triggered')
    this.element.classList.add('active');
  },
  offset: '50%'
})