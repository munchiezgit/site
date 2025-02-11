document.addEventListener("DOMContentLoaded", function() {
  let currentIndex = 0;
  const images = document.querySelectorAll('.gallery li');
  const totalImages = images.length;

  // Function to show the next image
  function showImage(index) {
    // Remove the 'active' class from all images
    images.forEach(image => image.classList.remove('active'));
    
    // Add the 'active' class to the current image
    images[index].classList.add('active');
  }

  // Move to the next image
  function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
  }

  // Initialize first image
  showImage(currentIndex);

  // Change image every 3 seconds
  setInterval(nextImage, 3000);
});
