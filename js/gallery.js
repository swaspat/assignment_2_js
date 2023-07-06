// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
  // Get the featured image and thumbnails
  var featuredImage = document.getElementById("featured-image");
  var thumbnails = document.querySelectorAll("#thumbnails img");

  // Add event listener to each thumbnail
  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      // Get the source and alt attributes of the clicked thumbnail
      var src = this.getAttribute("src").replace("-small", "-large");
      var alt = this.getAttribute("alt");

      // Update the featured image and caption
      featuredImage.setAttribute("src", src);
      featuredImage.setAttribute("alt", alt);
      document.getElementById("image-caption").textContent = alt;
    });
  });
});
