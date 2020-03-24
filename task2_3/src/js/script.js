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
    makeBurger();

    window.addEventListener('resize', function(event){
        resizeShadows();
    });
});

/**
 * События формы
 */
function createForm(form) {
    const action = form.action;
    const elements = form.elements;

    if(!action || !elements.length) return;

    function validate(){
        let result = true;

        for(let i = 0; i< elements.length; i++){
            let el = elements[i];
            //if (!el.dataset.required) continue;
            if (el.type === 'text' || el.type === 'tel' || el.type === 'email' || el.tagName === 'textarea'){
                if (!el.value) {
                    el.classList.add('error');
                    el.addEventListener('input', removeClass);
                    result = false;
                }
            }
            if (el.type === 'select'){
                console.log(el.type);
                if (!el.value) {
                    el.classList.add('error');
                    console.log("error");
                    el.addEventListener('input', removeClass);
                    result = false;
                }
            }
            else if (el.type === 'checkbox' || el.type === 'radio'){
                if(!el.checked) {
                    el.classList.add('error');
                    el.addEventListener('change', removeClass);
                    result = false;
                }
            }
            else if (el.tagName.toLocaleLowerCase() ==='select' && !el.getAttribute('multiply')){
                if (el.selectedIndex === 0) {
                    el.classList.add('error');
                    el.addEventListener('change', removeClass);
                    result = false;
                }
            }
        }

        function removeClass(){
            this.classList.remove('error');
        }

        return result;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if(!validate()) {
            // h2.innerHTML = 'Ошибка!';
            // p.innerHTML = 'Проверьте корректность вводимых данных';
            // p.style.color = '#EC3332';
        }
        else{
            // let btn_close = document.createElement('button');
            // let div = document.createElement('div');
            // let h2 = document.createElement('h2');
            // let p = document.createElement('p');
            // document.documentElement.classList.add("popupActive");
            // document.documentElement.style.overflowY = 'hidden';
            // const popup_inner = document.querySelector('.popup-inner');
            // popup_inner.innerHTML = '';
            // popup_inner.append(btn_close);
            // btn_close.setAttribute("class", "close");
            // popup_inner.append(div);
            // div.append(h2);
            // div.append(p);
            // h2.innerHTML = 'Поздравляем!';
            // p.innerHTML = 'Вы записались на RDCLR.HOME';
            // h2.style.color = '#000000';
            let myForm = document.querySelector('form');
            myForm.reset();

            // btn_close.addEventListener('click', function () {
            //     document.documentElement.classList.remove('popupActive');
            //     document.documentElement.style.overflowY = 'visible';
            // });
        }
    })
}

function createFormWrapper(){
    const forms = document.querySelectorAll('form');
    const overlay = document.querySelector('.overlay');
    if (!forms || !overlay) return;

    overlay.addEventListener('click', function () {
        document.documentElement.classList.remove('popupActive');
        document.documentElement.style.overflowY = 'visible';

    });

    Array.from(forms).forEach(form => createForm(form))
}

/**
 * Меню бургер для мобилки
 */
function makeBurger(){
    let button = document.querySelector(".nav-button");
    let nav = document.querySelector("nav");

    if (!button || !nav) return;
    let active = false;

    let menu = nav.querySelector('.nav-menu');
    let div = document.createElement('div');
    let tel = document.createElement('span');
    tel.innerText = "+7 (800) 700-06-07";
    div.classList.add('tel-menu');
    div.appendChild(tel);

    button.addEventListener("click", function () {
        if (!active) {
            nav.classList.add("active");
            document.documentElement.style.overflowY = 'hidden';
            active = true;
            menu.appendChild(div);
        }
        else{
            nav.classList.remove("active");
            document.documentElement.style.overflowY = 'visible';
            active = false;
            menu.removeChild(div)
        }
    });
}