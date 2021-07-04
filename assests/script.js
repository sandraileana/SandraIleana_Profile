// $('#AboutMeButton').click(function () {
//         $('#container1').show();
//         $('#container2').hide();
//         $('#container2').hide();
//     });

// $(document).ready(function () {
//     $('#AboutMe').click(function () {
//             $('#container').toggle();
//         });
//     })

function myFunction1(){
    var AboutMe = document.getElementById('container1');
    if (AboutMe.style.display === 'none'){
        AboutMe.style.display = 'block';
    } else {
        AboutMe.style.display = 'none';
    }
}

    // ;
    // var AboutMeButton = document.getElementById('AboutMeButton');
    // if (AboutMeButton.active === 'true'){
    //     AboutMeButton.disabled = 'true';
    // } else {
    //     AboutMeButton.active = 'false';
    // }


// $('#AboutMe').on("click", function () {
//     console.log("user has clicked on my profile");
//     $("#container1").hide();
// })