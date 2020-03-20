"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
    function myResize() {
        const wrapper = document.getElementsByClassName('wrapper-js');
        let elements = wrapper[0].querySelectorAll('main-block-js');

        let my_width = elements[0].clientWidth;
        let my_height = elements[0].clientHeight;

        for(let i=1; i < elements.length; i++) {
            elements[i].style.width = my_width + "px";
            elements[i].style.height = my_height + "px";
        }
    }

    // const wrapper_service = document.getElementsByClassName('wrapper-text');
    // const wrapper_advantages_1 = document.getElementsByClassName('advantages_line1');
    // const wrapper_advantages_2 = document.getElementsByClassName('advantages_line2');

    window.addEventListener('resize', function(event){
        myResize();
        // myResize(wrapper_advantages_1);
        // myResize(wrapper_advantages_2);
    });
    myResize();
    // myResize(wrapper_advantages_1);
    // myResize(wrapper_advantages_2);

    const input_wrapper = document.getElementsByClassName('input-wrapper');
    for(let i=1; i < input_wrapper.length; i++) {
        const input = input_wrapper[i].getElementsByTagName('input');
        const span = input_wrapper[i].getElementsByClassName('placeholder');

            input[0].addEventListener('focus', function(event){
                span[0].style.display = "none";
            });


    }


});
