const addScript = () => {  
    const elementScript = document.createElement('script');
    elementScript.setAttribute('src', 'interactivity.js');
    document.querySelector('body').appendChild(elementScript);
}
window.addEventListener('DOMContentLoaded', addScript);
