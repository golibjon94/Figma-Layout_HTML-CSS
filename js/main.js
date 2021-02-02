(function () {
        const header = document.querySelector('.header');
        window.onscroll = () => {
                if(window.pageYOffset > 50) {
                        header.classList.add('header__avtive');
                } else {
                        header.classList.remove('header__avtive');
                }
        };
}());