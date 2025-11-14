      // Modal controls with small enter animation
      const modalBack = document.getElementById("modalBack");
      const modalCard = document.getElementById("modalCard");
      function openModal(id) {
        modalBack.style.display = "flex";
        // small enter animation
        setTimeout(() => {
          modalCard.style.opacity = 1;
          modalCard.style.transform = "translateY(0)";
        }, 40);
      }
      function closeModal() {
        modalCard.style.opacity = 0;
        modalCard.style.transform = "translateY(20px)";
        setTimeout(() => (modalBack.style.display = "none"), 220);
      }
      const contactBtn = document.getElementById("contactBtn");
      if (contactBtn)
        contactBtn.addEventListener("click", () => openModal("contact"));
      const openContactForm = document.getElementById("openContactForm");
      if (openContactForm)
        openContactForm.addEventListener("click", () => openModal("contact"));
      modalBack.addEventListener("click", (e) => {
        if (e.target === modalBack) closeModal();
      });

      // Small entry stagger
      document.querySelectorAll(".appear").forEach((el, i) => {
        el.style.animationDelay = i * 80 + "ms";
      });

      //
      