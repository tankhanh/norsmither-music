let slideIndex = 1;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (index > slides.length) {
    slideIndex = 1;
  }
  if (index < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function changeSlide(n) {
  showSlide((slideIndex += n));
}

// Auto slide change, uncomment the line below if you want auto slide change
// setInterval(() => changeSlide(1), 5000);

// Show the first slide initially
showSlide(slideIndex);

// =================================================================
var form = document.getElementById("sheetdb-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Lấy giá trị email từ form
  var email = document.getElementById("email").value;

  // Kiểm tra email đã đăng ký hay chưa
  fetch(form.action)
    .then((response) => response.json())
    .then((data) => {
      // Kiểm tra nếu có dữ liệu trả về và email đã đăng ký
      if (data.some((entry) => entry.Email === email)) {
        alert("This email has been previously registered!");
        form.reset();
      } else {
        // Nếu chưa đăng ký, thực hiện yêu cầu POST
        fetch(form.action, {
          method: "POST",
          body: new FormData(form),
        })
          .then((response) => response.json())
          .then(() => {
            alert("Submitted successfully! Thank you for submitting!");
            form.reset();
          });
      }
    });
});
// =================================================================
var typed = new Typed(".mutiple-text", {
  strings: ["Developer", "Music Producer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
