/*Name this external file gallery.js*/

function upDate(previewPic) {

   var display_element = document.getElementById('image')

   display_element.style.backgroundImage = `url('${previewPic.src}')`
   display_element.innerHTML = `${previewPic.alt}`

}
  
function unDo() {

   var display_element = document.getElementById('image')

   display_element.style.backgroundImage = `url('')`
   display_element.innerHTML = 'Hover over an image below to display here.'
   
}

function stuff () {
   console.log('first')
}

function stuff () {
   console.log('second')
}