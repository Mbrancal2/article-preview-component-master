
// Define your media query
var mediaQuery = window.matchMedia('(max-width: 675px)');

// Flag to track if button was pressed
var buttonPressed = false;

// Function to handle screen size changes
function handleScreenSizeChange(e) {
    var popup = document.querySelector('.pop-up');
    var button = document.querySelector('.socials-button');
    var triangle = document.querySelector('.pop-up-triangle');
    var socials_text = document.querySelector('.socials-text');


    if (e.matches) {
        // Screen size is 675px or smaller and button was pressed
        triangle.style.backgroundColor = 'red';
        // triangle.classList.add('hidden');
    } else {
        // Screen size is larger than 675px or button was not pressed
        triangle.classList.remove('hidden');
    }
}

// Function to position and toggle the popup
function togglePopup() {
    var popup = document.querySelector('.pop-up');
    var button = document.querySelector('.socials-button');
    var triangle = document.querySelector('.pop-up-triangle');
    var test = document.querySelector('.test');
    var container = document.querySelector('.container');
    var container_text_socials = document.querySelector('.container-text-socials');

    function positionPopup() {
        var rect = button.getBoundingClientRect();
        popup.style.top = (rect.bottom + window.scrollY - 100) + 'px';
        popup.style.left = (rect.left + window.scrollX - 115) + 'px';
        triangle.style.top = (rect.bottom + window.scrollY - 90) + 'px';
        triangle.style.left = (rect.left + window.scrollX - 10) + 'px';
        test.style.width = container.offsetWidth + 'px';
        test.style.height = container_text_socials.offsetHeight + 'px';
    }

    // Toggle the visibility of the popup
    if (popup.classList.contains('hidden')) {
        // buttonPressed = true;
        positionPopup();
        popup.classList.remove('hidden');
        triangle.classList.remove('hidden');
        // if (!mediaQuery.matches) {
        //     triangle.classList.remove('hidden');
        // }

        // Add event listener for screen size changes
        mediaQuery.addEventListener('change', handleScreenSizeChange);

        // Add an event listener to reposition the popup on window resize
        window.addEventListener('resize', positionPopup);
    } else {
        // buttonPressed = false;
        popup.classList.add('hidden');
        triangle.classList.add('hidden');

        // Remove event listeners when the popup is hidden
        window.removeEventListener('resize', positionPopup);
        mediaQuery.removeEventListener('change', handleScreenSizeChange);
    }
}

// Add event listener for the button click
document.querySelector('.socials-button').addEventListener('click', togglePopup);



//var mediaQuery = window.matchMedia('max-width: 675px');

// function handleScreenSizeChange(e)
// {
//     var popup = document.querySelector('.pop-up');
//     var button = document.querySelector('.socials-button');
//     var triangle = document.querySelector('.pop-up-triangle');

//     if(e.matches)
//     {
//         triangle.classList.add('hidden');
//     }
//     else
//     {
//         triangle.classList.remove('hidden');
//     }
// }

// function togglePopup()
// {
//     var popup = document.querySelector('.pop-up');
//     var button = document.querySelector('.socials-button');
//     var triangle = document.querySelector('.pop-up-triangle');
//     var mediaQuery = window.matchMedia('max-width: 675px');

//     function positionPopup() {
//         var rect = button.getBoundingClientRect();
//         popup.style.top = (rect.bottom + window.scrollY + -100) + 'px';
//         popup.style.left = (rect.left + window.scrollX + -115) + 'px';
//         triangle.style.top = (rect.bottom + window.scrollY + -90) + 'px';
//         triangle.style.left = (rect.left + window.scrollX + -10) + 'px';
//     }

//     if (popup.classList.contains('hidden')) {

//         if(mediaQuery.matches)
//         {
//             positionPopup();
//             //popup.style.display = 'block';
//             popup.classList.remove('hidden');
//             triangle.classList.remove('hidden');
//             triangle.style.add('background-color: red')
//         }
//         else
//         {
//             positionPopup();
//             //popup.style.display = 'block';
//             popup.classList.remove('hidden');
//             triangle.classList.remove('hidden');
//             triangle.style.remove('background-color: red')
//         }
//         //positionPopup();
//         //popup.style.display = 'block';
//         //popup.classList.remove('hidden');
//         //triangle.classList.remove('hidden');

//         // Add an event listener to reposition the popup on window resize
//         window.addEventListener('resize', positionPopup);
//     } 
//     else {
//         //popup.style.display = 'none';
//         popup.classList.add('hidden');
//         triangle.classList.add('hidden');
//         // Remove the event listener when the popup is hidden
//         window.removeEventListener('resize', positionPopup);
//     }
    
// }
// //Initial check
// //togglePopup(mediaQuery);
// document.querySelector('.socials-button').addEventListener('click', togglePopup);



// document.querySelector('.socials-button').addEventListener('click', function () {
//     var popup = document.querySelector('.pop-up');
//     var button = document.querySelector('.socials-button');
//     var triangle = document.querySelector('.pop-up-triangle');

//     function positionPopup() {
//         var rect = button.getBoundingClientRect();
//         popup.style.top = (rect.bottom + window.scrollY + -100) + 'px';
//         popup.style.left = (rect.left + window.scrollX + -115) + 'px';
//         triangle.style.top = (rect.bottom + window.scrollY + -90) + 'px';
//         triangle.style.left = (rect.left + window.scrollX + -10) + 'px';
//     }

//     // Toggle the visibility of the popup
//     if (popup.classList.contains('hidden')) {
//         positionPopup();
//         //popup.style.display = 'block';
//         popup.classList.remove('hidden');
//         triangle.classList.remove('hidden');

//         // Add an event listener to reposition the popup on window resize
//         window.addEventListener('resize', positionPopup);
//     } 
//     else {
//         //popup.style.display = 'none';
//         popup.classList.add('hidden');
//         triangle.classList.add('hidden');
//         // Remove the event listener when the popup is hidden
//         window.removeEventListener('resize', positionPopup);
//     }
// });
