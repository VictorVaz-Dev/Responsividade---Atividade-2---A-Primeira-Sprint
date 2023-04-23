window.addEventListener('scroll', () => {
    const headerPage = document.querySelector('header');
    headerPage.classList.toggle('active-scroll', window.scrollY > 100);
})