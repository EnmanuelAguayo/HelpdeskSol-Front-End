//const mainDinamic = async (linkPage) => {
//    // Dinamic content
//    if (linkPage !== undefined && linkPage !== null) {
//        
//        // Capturar nombre actual del contenido
//        const actualContent = document.getElementById('mainDinamic');
//        const actualContentName = actualContent.getAttribute('pageName').toLowerCase();
//
//        // Eliminar script actual
//        if (actualContentName != linkPage.toLowerCase()) {
//            const rename = actualContentName.charAt().toUpperCase() + actualContentName.slice(1);
//            const removeScript = document.getElementById('script' + rename);
//            console.log(removeScript);
//    
//            if (removeScript) {
//                removeScript.remove();
//            }
//            
//            // Agregar nuevo script y contenido
//            const newPage = linkPage.toLowerCase();
//            const dinamicScript = document.createElement('script');
//            dinamicScript.src = `../pages/${newPage}/${newPage}.js`;
//            dinamicScript.id = 'script' + newPage.charAt().toUpperCase() + newPage.slice(1);
//            document.body.appendChild(dinamicScript);
//            
//            // Cambiar la url sin recargar página
//            //const newUrl = `../pages/${namePage}.html`;
//            //window.history.pushState({page: namePage}, '', newUrl);
//        }
//    }
//}
//
//document.addEventListener('click', function(event){
//    event.preventDefault();
//    const domElement = event.target;
//    if (domElement.classList.contains('linkPage')){
//        let linkPage = '';
//        if (domElement.nodeName == 'UL') {
//            linkPage = domElement.children[1].children[0].getAttribute('href');
//        } else if (domElement.nodeName == 'LI') {
//            linkPage = domElement.children[0].getAttribute('href');
//        } else if (domElement.nodeName == 'A') {
//            linkPage = domElement.getAttribute('href');
//        } else if (domElement.nodeName == 'I' || domElement.nodeName == 'P') {
//            linkPage = domElement.parentElement.getAttribute('href');
//        }
//        mainDinamic(linkPage);
//    }
//})
//
//