document.querySelector("body").addEventListener('mouseover', 
function (eyeball) {
        var eye = document.querySelectorAll(".eye");
        eye.forEach(function (eye) {
            let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
            let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

            let radian = Math.atan2(eyeball.pageX - x, eyeball.pageY - y);
            let rot = (radian * (180 / Math.PI) * -1) + 270;

            eye.style.transform = "rotate("+ rot +"deg)";
        })
    }
);