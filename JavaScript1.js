//this is an in-line comment

/*this is
multi-line comment*/

// () => {} This is a Lambda which is a method without a name. Can be written in methods.

//For every button, when it is clicked, find its related card in the container and toggle visibility.

const button = document.querySelectorAll(".button");
button.forEach(button => { 
 button.addEventListener("click", () => {
     //Container is parentElement for button. This is finding the container that matches the current button we pressed on the page. 
     const card = button.parentElement.querySelector(".card");
    card.classList.toggle("hidden");
 });
});


//For every button, when it is clicked, find its related dialog box in the container and show it. Copied from button functionality.
const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const dialog = button.parentElement.querySelector(".dialog");
        dialog.show();
    });
});

//Close Button Functionality
const closeButtons = document.querySelectorAll(".close");
closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const dialog = btn.closest(".dialog");
        dialog.close();
    })
})

const containers = document.querySelectorAll(".video-container");

containers.forEach(container => {
    const video = container.querySelector(".video");
    const img = container.querySelector(".preview");

    container.addEventListener("mouseenter", () => {
        //Hide the image
        img.style.display = "none";
        video.play();
    });

    //Reset the video when not hovering
    container.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
        //Show the image again after hovering
        img.style.display = "block";
    });
});