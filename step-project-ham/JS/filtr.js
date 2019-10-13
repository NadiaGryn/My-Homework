const filterCategory = document.querySelectorAll(".work-tab-menu .work-tabs-title");
for (let i = 0; i < filterCategory.length; i++) {
    filterCategory[i].addEventListener("click", function () {
        const parent = this.parentElement;
        if (this.dataset.filter === '*') {
            const imgAll = [...document.querySelectorAll(".item-hover-container")];
            const imgShow = imgAll.slice(0,12)
            console.log(imgShow)
            for (let img of imgAll) {
                img.classList.add('hidden');
            }
            for (let img of imgShow) {
                img.classList.remove('hidden');
            }
            for (let i = 0; i < parent.children.length; i++) {
                parent.children[i].classList.remove("active");
            }
            this.classList.add("active");
            return;
        }

        for (let i = 0; i < parent.children.length; i++) {
            parent.children[i].classList.remove("active");
        }

        this.classList.add("active");


        const images = document.getElementsByClassName("item-hover-container");
        for (let i = 0; i < images.length; i++) {
            images[i].classList.add('hidden');
        }
        const selector = this.dataset.filter;
        console.log(selector);

        const showImages = document.querySelectorAll(`${selector}.item-hover-container`);


        for (let i = 0; i < showImages.length; i++) {
            showImages[i].classList.remove('hidden');
        }
    })

    const loadBtn = document.querySelector(".load-btn");
    loadBtn.addEventListener("click", function () {
        const imgAll = document.querySelectorAll(".item-hover-container");
        const imgShow = imgAll;
        for (i=0; i < imgShow.length; i++){
            imgShow[i].classList.remove("hidden");
        }
        loadBtn.classList.add('hidden');
    })
}