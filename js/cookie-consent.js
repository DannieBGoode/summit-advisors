document.addEventListener("DOMContentLoaded", function() {
    var cookieOverlay = document.querySelector(".cookie-overlay");
    var gaMeasurementId = siteData.gaMeasurementId; // Use the variable from the HTML file

    // Function to initialize and load Google Analytics
    function loadGoogleAnalytics() {
        if (!gaMeasurementId) return;

        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', gaMeasurementId);

        var gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaMeasurementId;
        document.head.appendChild(gaScript);
    }

    // Function to handle cookie consent
    function handleCookieConsent() {
        var date = new Date();
        date.setTime(date.getTime() + (365*24*60*60*1000)); // Set cookie to expire in one year
        var expires = "expires=" + date.toUTCString();
        document.cookie = "accepted_cookies=yes; " + expires + "; path=/";
        cookieOverlay.style.display = "none";
        loadGoogleAnalytics();
    }

    // Check for existing consent or load GA if consented
    if (document.cookie.indexOf("accepted_cookies=yes") !== -1) {
        loadGoogleAnalytics();
    } else {
        cookieOverlay.style.display = "flex";
    }

    // Event listeners
    document.querySelector(".accept-cookies").addEventListener("click", handleCookieConsent);
    document.querySelector(".close-cookies").addEventListener("click", function() {
        cookieOverlay.style.display = "none";
    });
});