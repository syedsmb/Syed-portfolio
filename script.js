// Resume button
document.getElementById('viewResumeBtn').addEventListener('click', () => {
  window.open('assets/Resume_S Mahammad Basha.pdf', '_blank');
});

// Read More scrolls to hero
document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
  });
});

// Navbar toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

function showProjectInfo(projectName) {
  alert(`You clicked on ${projectName} project!`);
}


function openCertificatePage() {
    window.location.href = "certificate.pdf";
  }

// Contact form submit → open LinkedIn chat
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  // open LinkedIn message with prefilled text
  const linkedInURL = `https://www.linkedin.com/in/syed-mahammad-basha-828a88277`;
  alert(`Redirecting to Syed's LinkedIn to send message: "${message}"`);
  window.open(linkedInURL, '_blank');

  function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("active");
  }


});





