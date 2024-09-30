"use strict";
const thumbList = document.querySelector("ul");
thumbList.addEventListener("click", (e)=>{
    e.preventDefault();
    let target = e.target;
    if (target.tagName === "IMG") target = target.parentElement;
    const largeImg = document.getElementById("largeImg");
    largeImg.src = target.href;
});

//# sourceMappingURL=index.f75de5e1.js.map
