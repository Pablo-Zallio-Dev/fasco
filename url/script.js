	/* Click Menu Button */	

    const d = document;

    d.addEventListener("click", (e) => {
        if(e.target.matches(".hamburger") || e.target.matches(".hamburger *")) {
            d.querySelector(".hamburger").classList.toggle("is-active")
            d.querySelector(".header__nav").classList.toggle("header__nav--active")
        } else {
          
            d.querySelector(".header__nav").classList.remove("header__nav--active")
            d.querySelector(".hamburger").classList.remove("is-active")

        }
    })
