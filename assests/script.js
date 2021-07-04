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
    var MyWork = document.getElementById('container2');
    var Coding = document.getElementById('container3');
    if (AboutMe.style.display === 'none'){
        AboutMe.style.display = 'block';
        MyWork.style.display = 'none';
        Coding.style.display = 'none';
    } else {
        AboutMe.style.display = 'none';
    }
}

function myFunction2(){
    var AboutMe = document.getElementById('container1');
    var MyWork = document.getElementById('container2');
    var Coding = document.getElementById('container3');
    if (MyWork.style.display === 'none'){
        MyWork.style.display = 'block';
        AboutMe.style.display = 'none';
        Coding.style.display = 'none';
    } else {
        MyWork.style.display = 'none';
    }
}

function myFunction3(){
    var AboutMe = document.getElementById('container1');
    var MyWork = document.getElementById('container2');
    var Coding = document.getElementById('container3');
    if (Coding.style.display === 'none'){
        Coding.style.display = 'block';
        AboutMe.style.display = 'none';
        MyWork.style.display = 'none';
    } else {
        Coding.style.display = 'none';
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