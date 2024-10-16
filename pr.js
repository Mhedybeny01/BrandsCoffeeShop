const body = document.querySelector("body"),
      navbar = document.querySelector(".navbar"),
      icons = document.querySelector(".icnsSocial"),
      search = document.querySelector(".search"),
      user = document.querySelector(".user"),
      str = document.querySelector(".order"),
      up = document.querySelector(".scroll"),
      srch = document.querySelector(".srch"),
      dis = document.querySelector(".logingorsingup"),
      login = document.querySelector(".login"),
      contentLog = document.querySelector(".contentLog"),
      btn = document.querySelector(".btn01"),
      back = document.querySelector(".back");
  




    user.addEventListener('click', () => {
        dis.classList.toggle("sh");
        if(dis.classList.contains("sh")){
            srch.classList.remove("open");
        }
   
    
    });
    search.addEventListener('click',()=>{
        srch.classList.toggle("open");

        if(srch.classList.contains("open")){
            dis.classList.remove("sh");
        }
           }) 
    
    
    up.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth'});   
    });


    window.onscroll = function() {
        if(window.scrollY >= 1166){
            up.classList.add("show");
        }else{
            up.classList.remove("show");
        }
    };

    btn.addEventListener('click', () => {
        login.classList.add("check");
       if(login.classList.contains("check")){
         dis.classList.remove("sh");
       }

    });

    back.addEventListener('click', () => {
        login.style.display = 'none';
        dis.style.display = 'block'; 
    });




    window.onscroll = function () {
        var categories = document.querySelector('.categories');
        var title = document.querySelector(".title");
        var sec = document.querySelector(".section3");
        // Show categories when the user scrolls past 700px down
        if (window.scrollY > 380) {
            categories.classList.add('show');
            categories.style.display = "flex";
        } 
        // Hide categories when the user scrolls above 700px
        else {
            categories.classList.remove('show');
            
        }

        if(window.scrollY > 300){
            title.classList.add("show2");
            title.style.display = "flex";
        }else{
            title.classList.remove("show2");
        }

        if(window.scrollY > 900){
            sec.classList.add("show3");
            sec.style.display = "flex";
        }else{
            sec.classList.remove("show3");
        }

        var title2 = document.querySelector(".title2");
        if(window.scrollY > 1300){
            title2.classList.add("show4");
            title2.style.display = "flex";
        }else{
            title2.classList.remove("show4");
        }

        var allmenu = document.querySelector(".allmenu");
        var mn1 = document.getElementById("mn1");
        var mn2 = document.getElementById("mn2");
        if(window.scrollY > 1400){
            mn1.classList.add("show5");
            mn1.style.display = "flex";
        }else{
            mn1.classList.remove("show5");
        }

        if(window.scrollY > 1600){
            mn2.classList.add("show6");
            mn2.style.display = "flex";
        }else{
            mn2.classList.remove("show6");
        }
        var section5 = document.querySelector(".section5");
        if(window.scrollY > 2000){
            section5.classList.add("show7");
            section5.style.display = "flex";
        }else{
            section5.classList.remove("show7");
        }

};
    
   

  

    
    
