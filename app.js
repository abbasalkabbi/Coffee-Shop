const menu_nav=document.querySelector('.menu-nav');
a = menu_nav.querySelectorAll("ul a");
a[0].addEventListener("click", menubuttonclose);
a[1].addEventListener("click", menubuttonclose);
a[2].addEventListener("click", menubuttonclose);
a[3].addEventListener("click", menubuttonclose);


function menubutton() {
    menu_nav.style.display = "flex";
  }
function menubuttonclose(){
    menu_nav.style.display="none"
}