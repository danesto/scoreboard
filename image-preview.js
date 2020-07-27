function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function(e) {
        // $('#blah').attr('src', e.target.result);
        $('#screen-one').html(`<img id="blah" src="${e.target.result}" alt="your image" />`)
      }
      
      reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
  }
  
  $("#imgInp").change(function() {
    readURL(this);
  });

// GOAL TRIGGER
document.getElementById('goal').addEventListener('click',()=>{
    $('#screen-one').html(`<img id="goal-gif" src="public/img/goal.gif" alt="your image" width="256px" height="192px" />`)
})