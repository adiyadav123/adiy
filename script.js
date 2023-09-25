var show_button = document.getElementById("show_btn");
var links_cont = document.getElementById("links");
var close_btn = document.getElementById("close");


show_button.addEventListener("click", function(){
    show();
});
close_btn.addEventListener("click", function(){
    hide();
})


const show = () => {
    links_cont.style.marginTop = "150px";
}

const hide = () => {
    links_cont.style.marginTop = "-265px";
}
