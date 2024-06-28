const activateLink = () => {
    const ruta = window.location.pathname.slice(0, -1);
    const page = ruta.substring(ruta.lastIndexOf('/') + 1);
    
    const links = document.querySelectorAll('.link-aside');

    links.forEach(link => {
        const linkName = link.getAttribute('href'); 
        const hrefName = linkName.substring(linkName.lastIndexOf('/') + 1);

        if (hrefName == page){
            if (link.getAttribute('link-aside-target')) {
                link.classList.add('active');
            }else{
                link.parentNode.parentNode.parentNode.classList.add('menu-open')
                link.parentNode.parentNode.parentNode.children[0].classList.add('active');
                link.classList.add('active');
            }
        }
    });
    
}

document.addEventListener('DOMContentLoaded', activateLink);