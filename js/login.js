// console.log("Button cliciking file added");
// step-1 set event handler
document.getElementById('button-login').addEventListener("click",function(event){
    // ste-2 prevent default behaviour (loading)
    event.preventDefault();
    console.log('login button clicked');

    // step-3 get the phone number

    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
})
