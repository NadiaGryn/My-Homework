// const tabs = document.querySelector(".tabs");
// const tabsChildren = tabs.children;
// // console.log(tabsChildren);

// for (let i = 0; i < tabsChildren.length; i++) {
//     tabsChildren[i].addEventListener("click", function (event) {
//         for (let i = 0; i < tabsChildren.length; i++) {
//             tabsChildren[i].classList.remove("active");
//         }
//         this.classList.add("active");


//         const tabsContent = document.querySelector(".tabs-content");
//         const tabsContentChildren = tabsContent.children;
//         console.log(tabsContent);


//     })
// }

const tabs = document.querySelector(".tabs");
const tabsChildren = tabs.children;

const tabsContent = document.querySelector(".tabs-content");
const tabsContentChildren = tabsContent.children;

for (i=0; i < tabs.children.length; i++){
    tabsChildren[i].dataset.index = String(i);
    if (i !==0 ) {
        tabsContentChildren[i].hidden = true;
    }
}

tabs.addEventListener("click", function (){     
    tabs.querySelector(".active").classList.remove("active");
    tabsContent.querySelector("li:not([hidden])").hidden = true;
    event.target.classList.toggle("active");
    tabsContentChildren[event.target.dataset.index].hidden = false;
});