const productContainers = [...document.querySelectorAll('.product-container')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    preBtn[i].addEventListener('click', () =>{
        item.scrollLeft -= containerWidth;
    })

    nxtBtn[i].addEventListener('click', () =>{
        item.scrollLeft += containerWidth;
    })
})

//sliders