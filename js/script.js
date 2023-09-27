var allProducts = document.querySelectorAll(".item .item-info p")
var selledItems = document.querySelector("#selled-items")
var priceBtn = document.querySelector("#show-price")
var finalPrice = document.querySelector("#final-price")
var totalPrice = 0


allProducts.forEach(function (item){
    item.onclick = function (){
        selledItems.innerHTML += item.textContent + "<br> " + "<br>"
        totalPrice +=  +(item.getAttribute("price"))

        if(selledItems.innerHTML != ""){
            priceBtn.style.visibility = "visible";
        }
    }
})


priceBtn.onclick = function (){

    finalPrice.innerHTML = "$" + totalPrice
}
