var x;
function display(){
    var ele=document.getElementById("main2");
    if(x==1){
    window.scrollBy(0,-450);
    ele.classList.remove("animate__zoomIn");
    document.getElementById("btn1").innerHTML="Get started";
    document.getElementById("btn1").classList.add("animate__pulse");
    ele.style.visibility="hidden";
    return x=0;
    }
    else{
        ele.style.visibility="visible";
        document.getElementById("btn1").innerHTML="Here you go";
        document.getElementById("btn1").classList.remove("animate__pulse");
        window.scrollBy(0,450);
        ele.classList.add("animate__zoomIn");
        return x=1;
    }

}