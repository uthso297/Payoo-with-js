// // console.log("Button cliciking file added");
// // step-1 set event handler
// document.getElementById('button-login').addEventListener("click",function(event){
//     // ste-2 prevent default behaviour (loading)
//     event.preventDefault();

//     // step-3 get the phone number

//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber,pinNumber);


//     // step-4 validation phone and pin
//     // this is tempoarary ..you should not do this
//     if(phoneNumber === '5' && pinNumber === '1234'){
//         console.log('you are logged in');
//         // step-5 allow users to use the website
//     }
//     else{
//         alert('wrong phone number or pin');
//     }

//     })


document.getElementById('button-login').addEventListener('click',function(event){

    event.preventDefault();

    // get phone number and pin

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber,pinNumber);

    if(phoneNumber === '5' && pinNumber === '1234'){
                console.log('you are logged in');
                // step-5 allow users to use the website
                window.location.href = '/home.html';
            }
            else{
                alert('wrong phone number or pin');
            }
})


