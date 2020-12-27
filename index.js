alert("Please note that this page is still under construction and the form is not yet functional");








$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
}); 





/* this is a callback function to handle the token*/


function onSubmit(token) {
  document.getElementById("contactform").submit();
}

/*API response:*/
{
    "success": true|false,
    "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
    "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
    "error-codes": [...]        // optional
  }

  /*for android*/
  {
    "success": true|false,
    "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
    "apk_package_name": string, // the package name of the app where the reCAPTCHA was solved
    "error-codes": [...]        // optional
  }