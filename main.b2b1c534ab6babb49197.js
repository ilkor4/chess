(()=>{"use strict";var t=document.querySelector(".stages-button_left"),e=document.querySelector(".stages-button_right"),s=document.querySelector(".stages__list"),n=document.querySelectorAll(".stages-buttons__step"),l=0,c=null,o=function(t){t.classList.add("stages-button_disabled"),t.disabled=!0},i=function(t){t.classList.contains("stages-button_disabled")&&(t.classList.remove("stages-button_disabled"),t.disabled=!1)},u=function(t,e){"right"===t?s.scrollLeft+=e:s.scrollLeft-=e};s.addEventListener("scroll",(function(){clearTimeout(c),c=setTimeout((function(){clearTimeout(c),[].slice.call(s.children).forEach((function(c,u){Math.abs(c.getBoundingClientRect().left-s.getBoundingClientRect().left)<40&&(4===(l=u)?o(e):0===l?o(t):(i(e),i(t)),n[l].classList.remove("stages-buttons__step_disabled"),n[l+1]&&n[l+1].classList.add("stages-buttons__step_disabled"),n[l-1]&&n[l-1].classList.add("stages-buttons__step_disabled"),console.log(l))}))}),100)})),t.addEventListener("click",(function(){return u("left",400)})),e.addEventListener("click",(function(){return u("right",400)}));var a=document.querySelector(".carousel-button_left"),r=document.querySelector(".carousel-button_right"),d=document.querySelector(".participants__list"),b=document.querySelector(".carousel-buttons__text"),f=1,_=null,g=function(t,e){"right"===t?d.scrollLeft+=e:d.scrollLeft-=e},L=function(t){t.classList.add("carousel-button_disabled"),t.disabled=!0},m=function(t){t.classList.contains("carousel-button_disabled")&&(t.classList.remove("carousel-button_disabled"),t.disabled=!1)};d.addEventListener("scroll",(function(){clearTimeout(_),_=setTimeout((function(){clearTimeout(_),[].slice.call(d.children).forEach((function(t,e){var s;Math.abs(t.getBoundingClientRect().left-d.getBoundingClientRect().left)<40&&(s=f=e+1,b.textContent=s.toString(),6===f?L(r):1===f?L(a):(m(r),m(a)))}))}),100)})),a.addEventListener("click",(function(){return g("left",400)})),r.addEventListener("click",(function(){return g("right",400)}))})();