var show_button = document.getElementById("show_btn");
var links_cont = document.getElementById("links");
var close_btn = document.getElementById("close");
var close_links = document.getElementById("hide");
var close_links1 = document.getElementById("hide1");
var close_links2 = document.getElementById("hide2");
var close_links3 = document.getElementById("hide3");
var close_links4 = document.getElementById("hide4");
var close_links5 = document.getElementById("hide5");


const show = () => {
    links_cont.style.marginTop = "150px";
}

const hide = () => {
    links_cont.style.marginTop = "-265px";
}


show_button.addEventListener("click", function(){
    show();
});
close_btn.addEventListener("click", function(){
    hide();
})
close_links.addEventListener("click", function(){
    hide();
})
close_links1.addEventListener("click", function(){
    hide();
})
close_links2.addEventListener("click", function(){
    hide();
})
close_links3.addEventListener("click", function(){
    hide();
})
close_links4.addEventListener("click", function(){
    hide();
})
close_links5.addEventListener("click", function(){
    hide();
})