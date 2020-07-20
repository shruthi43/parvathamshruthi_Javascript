function validate()
{
if( document.myForm.EmailID.value == "" ) {
    alert( "Please provide your EmailID!" );
    document.myForm.EMail.focus() ;
    return false;
 }
 if( document.myForm.password.value == "" ) {
    alert( "Please provide your password!" );
    document.myForm.EMail.focus() ;
    return false;
 }
 alert("Login Successful");
}