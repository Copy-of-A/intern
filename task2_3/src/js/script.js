"use strict";

function myResize() {
    let wrapper = document.getElementsByClassName('service-text');
    // console.log(wrapperClass);
    let elements = wrapper[0].querySelectorAll('div');

    let my_width = elements[0].clientWidth;
    let my_height = elements[0].clientHeight;

    for(let i=1; i < elements.length; i++) {
        elements[i].style.width = my_width + "px";
        elements[i].style.height = my_height + "px";
    }
}


window.addEventListener('resize', function(event){
    myResize();
});

myResize();

