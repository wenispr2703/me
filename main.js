// Memuat animasi Lottie
const animationContainer = document.getElementById("lottie-container");
const animationData = "animation.json"; // Ubah nama file jika diperlukan

const animation = bodymovin.loadAnimation({
  container: animationContainer,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: animationData,
});
// Ambil elemen-elemen yang diperlukan
const navbar = document.querySelector('.navbar');
const burgerMenu = document.querySelector('.burger-menu');

// Tambahkan event listener saat menu burger diklik
burgerMenu.addEventListener('click', function() {
  navbar.classList.toggle('active');
});
