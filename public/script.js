// script.js
// =======================================
// Animasi tombol logout — karakter keluar pintu
// =======================================

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".logoutButton");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("clicked")) return; // biar tidak diklik dua kali

      button.classList.add("clicked");

      const figure = button.querySelector(".figure");
      const arm1 = figure.querySelector(".arm1");
      const arm2 = figure.querySelector(".arm2");
      const leg1 = figure.querySelector(".leg1");
      const leg2 = figure.querySelector(".leg2");
      const door = button.querySelector(".door");
      const bang = button.querySelector(".bang");

      // animasi jalan
      const walk = (duration = 900) => {
        button.style.setProperty("--walking-duration", duration);

        button.style.setProperty("--transform-arm1", "rotate(20deg)");
        button.style.setProperty("--transform-arm2", "rotate(-20deg)");
        button.style.setProperty("--transform-leg1", "rotate(-20deg)");
        button.style.setProperty("--transform-leg2", "rotate(20deg)");

        setTimeout(() => {
          button.style.setProperty("--transform-arm1", "rotate(-20deg)");
          button.style.setProperty("--transform-arm2", "rotate(20deg)");
          button.style.setProperty("--transform-leg1", "rotate(20deg)");
          button.style.setProperty("--transform-leg2", "rotate(-20deg)");
        }, duration / 2);
      };
      const logoutBtn = document.querySelector(".logoutButton");

      logoutBtn.addEventListener("click", () => {
        logoutBtn.classList.add("clicked");
        setTimeout(() => {
          window.location.href = "/logout"; // ganti sesuai kebutuhan
        }, 1800);
      });

      // Animasi berjalan
      const walking = setInterval(() => walk(700), 700);

      // Gerak maju ke pintu
      figure.style.setProperty("--figure-duration", 1400);
      button.style.setProperty("--transform-figure", "translateX(40px)");

      // Masuk ke pintu
      setTimeout(() => {
        clearInterval(walking);
        figure.style.opacity = "0";
        button.classList.add("door-slammed");
        door.style.transition = "transform 100ms ease-in";
        door.style.transform = "none";
        bang.style.opacity = "0.6";
        button.classList.add("falling");

        // Hapus semua animasi setelah selesai
        setTimeout(() => {
          button.classList.remove("clicked", "door-slammed", "falling");
          figure.removeAttribute("style");
          button.removeAttribute("style");
          door.removeAttribute("style");
          bang.removeAttribute("style");
        }, 2000);
      }, 2000);
    });
  });
});
