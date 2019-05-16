$(document).ready(function () {


    $("#generate-btn").click(function(){
        var firstName = $('#firstName').val();
        var middleName = ["Bobby", "Wes", "Billy", "Ricky", "Davey", "Ward", "Ryan"];
        var lastName = ["Johnson", "Gordon", "Trickle", "Roberts", "Petty", "Martin", "Jones", "Wallace", "Skinner", "Bodine", "Burton", "Blaney"];
        
        var randMName = Math.floor(Math.random() * (middleName.length));
        var randLName = Math.floor(Math.random() * (middleName.length));

        $('.resultBox').hide().html(firstName + ' ' + middleName[randMName] + ' ' + lastName[randLName] + '<i class="far fa-flag"></i> <i class="far fa-flag"></i>').fadeIn('slow');
      });

      $('#firstName').keypress(function(e) {

        if(e.which == 13) {
            e.preventDefault();
            $('#generate-btn').click();
         }
   });
    
});