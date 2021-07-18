function sendMail(){
 let name = $("#name:input").val();
 let email = $("#email:input").val();
 let message = $("#message:input").val();
 let subjectEmail = "Client Send From portfolio";
 let reciverEmail = "asif.developer92@gmail.com";
  Email.send({
  Host: "smtp.gmail.com",
  Username : "asif.developer92@gmail.com",
  Password : "ssgzxhcoibguocff",
  To : reciverEmail,
  From : email,
  Subject : name,
  Body : message,
  }).then(
    message => alert("mail sent successfully")
  ).catch(
    error  => alert(error)
  );
}
