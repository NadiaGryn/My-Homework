const filterCategory = document.querySelectorAll(".work-tab-menu .work-tabs-title");
for (let i=0; i < filterCategory.length; i++){
    filterCategory[i].addEventListener("click", function() {
        const parent = this.parentElement;
        for (let i=0; i < parent.children.length; i++){
           parent.children[i].classList.remove("active");
        }
       
        this.classList.add("active");

        const images = document.getElementsByClassName("item-hover-container");
        for (let i=0; i < images.length; i++){
            images[i].style.display = "none";
        }
        const selector = this.dataset.filter;
                    console.log(selector);
                    
                    const showImages = document.querySelectorAll(`${selector}.item`);

                    
                    for (let i=0; i < showImages.length; i++){
                        showImages[i].style.display = "block";
                    }
                })
            }