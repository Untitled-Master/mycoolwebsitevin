// part 3: ry_4w3s0m3}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("more-btn");
  const text = document.getElementById("trip-text");

  btn.addEventListener("click", () => {
    text.innerHTML += "<br><br>It was a simple yet meaningful adventure that I’ll always remember. Can't wait for the next trip!";
    btn.style.display = "none"; // Hide button after clicking
  });
});
