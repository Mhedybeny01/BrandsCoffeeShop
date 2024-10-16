const body = document.querySelector("body"),
      navbar = document.querySelector(".navbar"),
      option = document.querySelector(".option"),
      back = document.querySelector(".back"),
      menu = document.querySelector(".menu");



      option.addEventListener('click', ()=>{
        
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            setTimeout(() => {
                menu.style.display = 'none'; // Hide after transition
            }, 400); // Match the transition duration
        } else {
            menu.style.display = 'flex'; // Show before adding active class
            setTimeout(() => {
                menu.classList.add('active');
            }, 10); 
        }
      })

      back.addEventListener('click', ()=>{
        window.location.href = "index.html";
      })

