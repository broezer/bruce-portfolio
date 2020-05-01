/*
var waypoint = new Waypoint({
  element: document.getElementById('natuurpodium'),
  handler: function() {
    //console.log('Natuurpodium waypoint triggered')
    this.element.classList.add('active');
  },
  offset: '50%'
})
*/

var continuousElements = document.getElementsByClassName('continuous-true')
for (var i = 0; i < continuousElements.length; i++) {
  new Waypoint({
    element: continuousElements[i],
    handler: function() {
      this.element.classList.add('active');
    },
    offset: '50%'
  })
}