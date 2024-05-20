function loadComponent(componentPath, elementId) {
    fetch(componentPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar componente:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    loadComponent('components/header.html', 'header-placeholder');
    loadComponent('components/main.html', 'main-placeholder');
    loadComponent('components/footer.html', 'footer-placeholder');
});
