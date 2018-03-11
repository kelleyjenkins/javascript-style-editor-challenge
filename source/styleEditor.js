$(document).ready(function(){
  $("#style_editor").submit(function(e) {
    let selectorValue = $('input[name="selector"]').val()
    let propertyValue = $('input[name="property"]').val()
    let valueValue = $('input[name="value"]').val()
    $( selectorValue ).css( propertyValue, valueValue)
    e.preventDefault()
    })
  });
