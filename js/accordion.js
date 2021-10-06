var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var product = this.nextElementSibling;
    if (product.style.display === "block") {
      product.style.display = "none";
    } else {
      product.style.display = "block";
    }
  });
}