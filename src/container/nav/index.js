// class Nav {
//     static back = () => {
//         history.back()
//     }

//     static forward = () => {
//         history.forward()
//     }
    
//     static reload = () => {
//         location.reload()
//     }

//     static home = () => {
//         window.location.href = 'http://localhost:3000/nav';
//     }

//     static goTo = () => {
//         const urlInput = document.getElementById('urlInput');
//         if (urlInput) {
//             const url = urlInput.value;
//             window.location.href = url;
//         }
//     }
// }

// window.nav = Nav

//=======================================================================

class Nav {
    static #HOME_PAGE = 'https://goofle.com'

    static #back = () => {
        return history.back()
    }

    static #forward = () => {
        return history.forward()
    }

    static #reload = () => {
        return history.reload()
    }

    static #changePage = (href) => {
        return location.assign(href)
    }

    static #go = () => {
        try {
            const url = new URL(window.input.value)
            this.#changePage(url.href)
        } catch (e) {
            alert('Введіть корректну адресу')
            console.log(e)
        }
    }

    static #home = () => {
        return this.#changePage(this.#HOME_PAGE)
    }

    static init = () => {
        window.back.onclick = this.#back
        window.forward.onclick = this.#forward
        window.reload.onclick = this.#reload
        window.home.onclick = this.#home
        window.go.onclick = this.#go

        window.input.value = location.href
    }
}

Nav.init()