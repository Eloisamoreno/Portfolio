const isInViewport = el => {
    const rect = el.getBoundingClientRect()
    const vertInView = (rect.top <= window.innerHeight) && ((rect.top + rect.height) >= 0)
    const horInView = (rect.left <= window.innerWidth) && ((rect.left + rect.width) >= 0)
    return (vertInView && horInView)
}

window.onload = () => {

    const activateLinks = () => {
        const uxImage = document.querySelector('#ux')
        const uxLink = document.querySelector('#ux-link')
        if(isInViewport(uxImage)) {
            uxLink.classList.add('active');
        } else {
            uxLink.classList.remove('active');
        }




        const graphicImage = document.querySelector('#graphic')
        const graphicLink = document.querySelector('#graphic-link')
        if(isInViewport(graphicImage)) {
            graphicLink.classList.add('active');
        } else {
            graphicLink.classList.remove('active');
        }



        const fashionImage = document.querySelector('#fashion')
        const fashionLink = document.querySelector('#fashion-link')
        if(isInViewport(fashionImage)) {
            fashionLink.classList.add('active');
        } else {
            fashionLink.classList.remove('active');
        }




        
    
    }
    document.addEventListener('scroll', activateLinks)
}



