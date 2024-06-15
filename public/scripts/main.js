document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const site = urlParams.get('site');

    const defaultSites = {
        "youtube": "https://www.youtube.com",
        "google": "https://www.google.com",
        // Add more preset sites here
    };

    if (site && defaultSites[site]) {
        document.getElementById('proxyIframe').src = `/api/proxy?site=${defaultSites[site]}`;
    } else {
        document.body.innerHTML = '<h2>Site not found</h2>';
    }
});
