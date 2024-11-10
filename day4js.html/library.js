"use strict";

class auth {
  contructor() {
    this.details = [
      {
        email: "vrushabh15@gmail.com",
        password: "Password123",
      },
      {
        email: "Vrushabhoyar.cdac@gmail.com",
        password: "Password123",
      },
      {
        email: "Vrushabh04@gmail.com",
        password: "Password123",
      },
    ];
  }
    checkemail(emailid) {
        console.log(emailid);
       var exp =
            /^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,})(\.[A-Za-z]{2,})?$/;
        var result = exp.test(emailid);
        console.log(result);
        return(result);
  }
    checkpassword(password) {
      console.log(password);
        var exp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#\$]).{4,12}$/;  
        var result = exp.test(password);
        console.log(result);
        return (result);

  }
  checkemailandpassword() {}
}
export default auth; ///creatin the class and exporting it to use in other files
