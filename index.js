alert("Please note that this page is still under construction and the form is not yet functional");








$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
}); 




emailjs.sendForm('gmail', 'template_uzo25ap', '#myForm')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
