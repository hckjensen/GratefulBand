document.addEventListener('DOMContentLoaded', function () {
    let images = ['/assets/img/image1.jpg', '/assets/img/image2.jpg', '/assets/img/image3.jpg', '/assets/img/image4.jpg', '/assets/img/image5.jpg', '/assets/img/image6.jpg']; // Add your image URLs here
    let currentIndex = 0;

    function changeBackground() {
      let header = document.header;
      header.classList.remove('fade-in');
      header.classList.add('fade-out');

      setTimeout(function () {
        header.style.backgroundImage = 'url(' + images[currentIndex] + ')';
        currentIndex = (currentIndex + 1) % images.length;

        header.classList.remove('fade-out');
        header.classList.add('fade-in');
      }, 1000);
    }

    setInterval(changeBackground, 1000); // Change image every 5 seconds
  });