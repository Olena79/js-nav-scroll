class Scroll {
    static #position = () => {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
        
            if (scrollPosition > 2000) {
                
                document.getElementById('scrollButton').style.display = 'block';
            } else {
                document.getElementById('scrollButton').style.display = 'none';
            }
        });
    }

    static #click = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }

    static init = () => {
        window.scrollButton.onclick = this.#click
        this.#position()
    }
}

Scroll.init()

// window.scrollButton.onclick = () => 
// window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: 'smooth',
// })

// let isDisplay = false

// setInterval(() => {
//    if(window.scrollY <= window.innerHeight && isDisplay === false) {
//         isDisplay = true
//         window.scrollButton.style.display = 'flex'
//         return null
//    }

//    if(window.scrollY > window.innerHeight && isDisplay === true) {
//     isDisplay = false
//     window.scrollButton.style.display = 'none'
//     return null
// }
// }, 500)