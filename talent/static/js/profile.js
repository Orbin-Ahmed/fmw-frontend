// Resume chips change

function change_filter(id) {
    let current_filter = document.querySelector('.current-filter');
    current_filter.classList.remove('current-filter')
    document.getElementById(id).classList.add('current-filter');
}


// Resume change template

function changeTemplate(index) {

    for (let i = 1; i <= 4; i++) {
        let template = document.getElementById('resume_template_' + i);
        if (index === i) {
            template.classList.add('resume-template-active');
            template.classList.remove('resume-template-hidden');
        } else {
            template.classList.add('resume-template-hidden');
            template.classList.remove('resume-template-active');
        }
    }

}

// function changeTemplateSlider(index) {
//
//     for (let i = 2; i <= 4; i++) {
//         let template = document.getElementById('resume_template_' + i);
//         if (index === i) {
//             template.classList.add('resume-template-active');
//             template.classList.remove('resume-template-hidden');
//         } else {
//             template.classList.add('resume-template-hidden');
//             template.classList.remove('resume-template-active');
//         }
//     }
//
// }


// Color Change functions

function changeColor(index) {

    let templates = ['.left-side-dark', '.template2-resume-top', '.template3-left-side-blue', '.left-side-primary-gradient'];

    for (let i = 0; i < templates.length; i++) {
        let templateNumber = document.querySelectorAll(templates[i]);
        templateTracking(index, templateNumber);
    }

}

function templateTracking(index, templateNumber) {
    for (let i = 0; i < 2; i++) {

        if (index === 1) {
            templateNumber[i].style.background = '#263238';

        } else if (index === 2) {
            templateNumber[i].style.background = '#3E3F42';

        } else if (index === 3) {
            templateNumber[i].style.background = 'linear-gradient(184.46deg, #44A08D -0.05%, #093637 96.77%)';

        } else if (index === 4) {
            templateNumber[i].style.background = 'linear-gradient(213.97deg, rgba(1, 53, 103, 0.85) -0.11%, #130433 100.07%)';

        }

    }
}




// Status toggle

let toggleDiv = document.getElementById('profile_status_toggle_div');
let toggleTrigger = document.getElementById('profile_status_toggle');
let toggleDiv2 = document.getElementById('profile_status_toggle_div_2');
let toggleTrigger2 = document.getElementById('status_toggle_trigger2');

toggleDiv.addEventListener("click", function () {
    if (toggleTrigger.innerHTML === "Private") {
        toggleTrigger.innerHTML = "Public";
    } else {
        toggleTrigger.innerHTML = "Private";
    }
})
toggleDiv2.addEventListener("click", function () {
    if (toggleTrigger2.innerHTML === "Private") {
        toggleTrigger2.innerHTML = "Public";
    } else {
        toggleTrigger2.innerHTML = "Private";
    }
})

