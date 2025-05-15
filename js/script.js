const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};



const slideContainer = document.getElementById('slideContainer');
const slides = slideContainer.children;
const totalSlides = slides.length;
let index = 0;

function showSlide(i) {
  index = (i + totalSlides) % totalSlides;
  slideContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
  showSlide(index - 1);
}

// Auto-slide setiap 3 detik
setInterval(nextSlide, 3000);


function handleSubmit() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const interest = document.getElementById('interest').value;
  
    if (!name || !email || !interest) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Simulasi kirim data
    console.log('Form Submitted:'), {
      name,
      email,
      interest
    }
}