$(document).ready(function(){

    var username_error = false;
    var password_error = false;
    var password_again_error = false;
    var email_error = false;

    $('#username').focusout(function(){
    check_username();
    });

    $('#password').focusout(function(){
        check_password();
    });

    $('#password_again').focusout(function(){
        check_password_again();
    });
    $('#email').focusout(function(){
        check_email();
    });


    function check_username(){
        var username_length = $('#username').val().length;
        if(username_length < 5 || username_length > 20){
            $('#username_error_msg').html('Username should be between 5-20 characters');
            $('#username_error_msg').show();
            username_error = true;
        }else{
            $('#username_error_msg').hide();
            username_error = false;
        }
    }

    function check_password(){
        var password_length = $('#password').val().length;
        if(password_length < 8){
            $('#password_error_msg').html('Password should be 8 characters long');
            $('#password_error_msg').show();
            password_error = true;
        }else{
            $('#password_error_msg').hide();
            password_error = false;
        }
    }

    function check_password_again(){
        var password_length = $('#password').val();
        var password_again_length = $('#password_again').val();
        if(password_length != password_again_length){
            $('#password_again_error_msg').html('Password did not match');
            $('#password_again_error_msg').show();
            password_again_error = true;
        }else{
            $('#password_again_error_msg').hide();
            password_again_error = false;
        }
    }

    function check_email(){
        var pattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if(pattern.test($("#email").val())){
            $("#email_error_msg").hide();
            email_error = false;
        }
        else{
            $("#email_error_msg").html("Invalid Email Address");
            $("#email_error_msg").show();
            email_error = true;
        }

        }



    $('#myForm').submit(function(){
        if(username_error == false && password_error == false && password_again_error == false && email_error == false ){
            return true;
        }
        else{
            return false;
        }

    })

});