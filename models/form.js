function validateForm() {
        if( document.form.name.value == "" ) {
           alert( "Please provide your name" );
           document.form.name.focus() ;
           return false;
        }
        if( document.form.email.value == "" ) {
           alert( "Please provide your Email" );
           document.myForm.email.focus() ;
           return false;
        }
        if( document.form.message.value == "" ) {
           alert( "You are sending an empty message" );
           document.myForm.message.focus() ;
           return false;
        }
        return( true );
        submitForm();
     }

function submitform(){
      if(document.myform.onsubmit()){
         document.myform.submit();
      }
     }
