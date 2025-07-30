// Welcoming speech logic
const userName = prompt("Enter your name:");
document.getElementById("name-placeholder").innerText = userName;

// Form validation and output
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && phone && message) {
    const result = `
      <h3>Form Submitted Successfully!</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
    document.getElementById("formResult").innerHTML = result;
    document.getElementById("contactForm").reset();
  } else {
    alert("Please fill all the fields.");
  }
});
