var featuredButton=document.querySelector(".featured__button"),modal=document.querySelector(".modal"),modalWrapper=document.querySelector(".modal__wrapper");featuredButton.addEventListener("click",(function(){modal.classList.remove("modal--close")})),modal.addEventListener("click",(function(){modal.classList.add("modal--close")})),modalWrapper.addEventListener("click",(function(e){e.stopPropagation()}));