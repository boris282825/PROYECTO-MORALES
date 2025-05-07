document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");
  
    if (menuBtn && navbar) {
      menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("open");
      });
    }
  
    const colorBtn = document.getElementById("colorBtn");
  
    if (colorBtn) {
      colorBtn.addEventListener("click", () => {
        
        const hue = Math.floor(Math.random() * 360);  
        const saturation = Math.floor(Math.random() * 61) + 40;  
        const lightness = Math.floor(Math.random() * 41) + 30;  
        
        const randomColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        document.body.style.backgroundColor = randomColor;
      });
    }
  
    
    const testimonios = document.querySelector(".testimonios");
  
    if (testimonios) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            testimonios.classList.add("in-view"); 
          }
        });
      }, {
        threshold: 0.2 
      });
  
      observer.observe(testimonios);
    }

    
    document.addEventListener("click", function (e) {
      if (navbar && navbar.classList.contains("open")) {
        const isClickInsideMenu = navbar.contains(e.target) || menuBtn.contains(e.target);
        if (!isClickInsideMenu) {
          navbar.classList.remove("open");
        }
      }
    });
  
    
    const motoImgs = document.querySelectorAll(".moto-img");
  
    motoImgs.forEach(img => {
      img.addEventListener("click", () => {
        img.style.borderColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
      });
    });
  
    const clientes = document.querySelectorAll(".clientes .comentario"); 
  
    clientes.forEach(comentario => {
      comentario.addEventListener("click", () => {

        const hue = Math.floor(Math.random() * 360);
        const saturation = Math.floor(Math.random() * 61) + 40;
        const lightness = Math.floor(Math.random() * 41) + 30;
  
        const randomColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  
        comentario.style.color = randomColor;
      });
     });
  
    });
  