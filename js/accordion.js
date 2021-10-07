var acc = document.getElementsByClassName("accordion active");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var product = this.nextElementSibling;
    if (product.style.display === "none") {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}