// JavaScript pour obtenir l'adresse IP côté client
function getIpAddress() {
    fetch('https://ipinfo.io/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ipAddress').textContent = data.ip;
        })
        .catch(error => {
            console.error('Erreur lors de la récupération de l\'adresse IP:', error);
        });
}

// Appel de la fonction au chargement de la page
window.onload = getIpAddress;
