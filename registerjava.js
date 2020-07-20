function validate() {
      
    if( document.myForm.FirstName.value == "" ) {
       alert( "Please provide your First name!" );
       document.myForm.FirstName.focus() ;
       return false;
    }
    if( document.myForm.LastName.value == "" ) {
       alert( "Please provide your Last name!" );
       document.myForm.LastName.focus() ;
       return false;
    }
    if( document.myForm.EmailID.value == "" ) {
        alert( "Please provide your EmailID!" );
        document.myForm.EmailID.focus() ;
        return false;
     }
     if( document.myForm.MobileNumber.value == "" ) {
        alert( "Please provide your Mobile Number!" );
        document.myForm.MobileNumber.focus() ;
        return false;
     }
     if( document.myForm.password.value == "" ) {
        alert( "Please provide your password!" );
        document.myForm.password.focus() ;
        return false;
     }
     if( document.myForm.MobileNumber.value.length != 10) {
      alert( "Invalid mobile no. !" );
      document.myForm.MobileNumber.focus() ;
      return false;
   }
   alert("Registration Successful");
}