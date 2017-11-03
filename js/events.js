//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('ALERT!');
  })
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty')
  })
}

function pressIt(){
  $('#typing').on('keydown', function(key){
    debugger;
    if (key.which === 71){
      alert('TADAAAA!')
    }
  })
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){

// call functions here
getIt();
pressIt();

});
