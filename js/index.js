const menuToggle = document.querySelector('input');

menuToggle.addEventListener('click', function() {

    let nav = document.getElementById("navbar");
    const isChecked = menuToggle.checked;
    
    if (isChecked) {
        if (nav.classList.contains("toggle")) {
            return;
        }else {
            nav.classList.add("toggle");
        }
    }else {
        if (nav.classList.contains("toggle")) {
            nav.classList.remove("toggle");
        }else {
            return;
        }
    }
});