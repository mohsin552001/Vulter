
function shwoproducts() {
    let product = document.querySelector('.bottomheaderSection .responsiveproducts')

    if (product.style.display === "none") {
        product.style.display = "flex";
    } else {
        product.style.display = "none";
    }

}


function signinbtns() {
    let btns = document.querySelector('.bottomheaderSection .signupbtns .btns')

    if (btns.style.display === "none") {
        btns.style.display = "flex";

    } else {
        btns.style.display = "none";

    }
}



