

window.Toggle = (id) => {
    let This = document.getElementById(id);
    if (This.classList.contains("flex")) {
        This.classList.remove("flex");
        This.classList.remove("flex-col")
        This.classList.add("hidden");

    }
    else {
        This.classList.remove("hidden");
        This.classList.add("flex")
        This.classList.add("flex-col")
    }

     let icon = document.getElementById("icon" +"\\" + id )
     if (icon.classList.contains("icon-expand")) {
         icon.classList.remove("icon-expand");
         icon.classList.add("icon-collapse")
     }
     else {
         icon.classList.remove("icon-collapse");
         icon.classList.add("icon-expand");

    }
    console.log(id + "Is open")

}

window.draggingOver = (id) => {

    let component = document.getElementById("component\\" + id);
    let list = component.classList;

     if (list.contains("z-50")) {
        list.remove("z-50");
    }
    else{
        list.add("z-50");
    }
   if (list.contains("bg-brandgray-50")) {
        list.remove("bg-brandgray-50");
    }
    else{
        list.add("bg-brandgray-50");
    }

}
window.onDrop = (id) => {

    let component = document.getElementById("component\\" + id);
    let list = component.classList;

    if (list.contains("animate-pulse")) {
        list.remove("animate-pulse");
    }
    else{
        list.add("animate-pulse");
    }

}
window.grab = (id) => {

    let component = document.getElementById("component\\" + id);
    let list = component.classList;

    if (list.contains("animate-pulse")) {
        list.remove("animate-pulse");
    }
    else{
        list.add("animate-pulse");
    }

}

window.cardOptions = (id) => {
    let opt = document.getElementById("opt\\" + id);
    let list = opt.classList;

    if (list.contains("hidden")) {
        list.remove("hidden");
    }
    else if (list.contains("flex")) {
        list.add("hidden");
    }
}
window.ToggleMe = async () => {
    let menuNav = document.getElementById("MobileNav");
    let menuOverlay = document.getElementById("MobileOverlay");
    let menu = document.getElementById("MobileMenu");

    if (menu.classList.contains("-translate-x-full")) {

        menu.classList.remove("hidden");
        setTimeout(menu.classList.remove("-translate-x-full"),10);
        menu.classList.add("translate-x-0");
    }
    else {
        menu.classList.remove("translate-x-0");
menu.classList.add("-translate-x-full")
        setTimeout(menu.classList.add("hidden"), 300);
            }
    if (menuNav.classList.contains("hidden")) {
        menuNav.classList.remove("hidden");
    }
    else {
        setTimeout(menuNav.classList.add("hidden"), 300);
    }
    if (menuOverlay.classList.contains("opacity-0")) {
        menuOverlay.classList.remove("hidden");
        setTimeout(menuOverlay.classList.remove("opacity-0"),10);
        menuOverlay.classList.add("opacity-100");
    }
    else {
        menuOverlay.classList.remove("opacity-100");
        menuOverlay.classList.add("opacity-0");
        setTimeout(menuNav.classList.add("hidden"), 300);
    }
    console.log("Sidebar Toggled")
}
