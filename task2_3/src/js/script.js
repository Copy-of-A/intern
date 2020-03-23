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

function resizeShadows() {
    let wrappers = document.getElementsByClassName('wrapper-js');
    for(let i = 0; i < wrappers.length; i++) {
        let mainElement = wrappers[i].getElementsByClassName('main-block-js');
        let elements = wrappers[i].getElementsByClassName('rectangle-block');

        let my_width = mainElement[0].clientWidth;
        let my_height = mainElement[0].clientHeight;

        for(let j = 0; j < elements.length; j++) {
            if (elements[j].classList.contains('main-block-js')) continue;
            elements[j].style.width = my_width + "px";
            elements[j].style.height = my_height + "px";
        }
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    expand();
    hidePlaceholder();
    resizeShadows();

    window.addEventListener('resize', function(event){
        resizeShadows();
    });
});