"use strict";

function expand() {
    const coll = document.getElementsByClassName('collapsible-js');
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener('click', function () {
            let span = this.querySelector("span");
            let content = this.previousElementSibling;
            const bg = this.querySelector("div");

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                span.innerHTML = `<span class="none-mob">Показать </span>ещё`;
                bg.style.transform = `rotate(0deg)`;
                this.style.justifyContent = 'flex-between';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                span.innerText = "свернуть";
                bg.style.transform = `rotate(180deg)`;
                this.style.justifyContent = 'space-around';
            }
        })
    }
}

function hidePlaceholder() {
    const input_wrapper = document.getElementsByClassName('input-wrapper');
    for(let i = 0; i < input_wrapper.length; i++) {
        let input = input_wrapper[i].querySelector('input');
        let span = input_wrapper[i].querySelector('.placeholder');
        input.addEventListener('focusin', function(event){
            span.style.display = "none";
        });
        input.addEventListener('focusout', function(event){
            if (input.value.length === 0) span.style.display = "block";
        });
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    expand();
    hidePlaceholder();

    function myResize() {
        // const wrapper = document.getElementsByClassName('wrapper-js');
        // let elements = wrapper[0].querySelectorAll('main-block-js');
        //
        // let my_width = elements[0].clientWidth;
        // let my_height = elements[0].clientHeight;
        //
        // for(let i=1; i < elements.length; i++) {
        //     elements[i].style.width = my_width + "px";
        //     elements[i].style.height = my_height + "px";
        // }
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
});
