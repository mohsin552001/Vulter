
function shwoproducts() {
    let product = document.querySelector('.bottomheaderSection .responsiveproducts')

    if (product.style.display === "none") {
        product.style.display = "flex";
    } else {
        product.style.display = "none";
    }
}


function signinbtns() {
    let product = document.querySelector('.bottomheaderSection .signupbtns .btns')

    if (product.style.display === "none") {
        product.style.display = "flex";

    } else {
        product.style.display = "none";

    }
}



function show() {
    let product = document.querySelector('.bottomheaderSection .visibleproducts')

    let header = document.querySelector('.bottomheaderSection .bottomheader')
    product.style.display = "block"
}
function hide() {
    let product = document.querySelector('.bottomheaderSection .visibleproducts')


    product.style.display = "none"

}