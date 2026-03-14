document.addEventListener("DOMContentLoaded", function() {
    var cookieOverlay = document.querySelector(".cookie-overlay");
    var gaMeasurementId = siteData.gaMeasurementId; // Use the variable from the HTML file

    // Function to initialize and load Google Analytics
    function loadGoogleAnalytics() {
        if (!gaMeasurementId || window.__summitAnalyticsLoaded) return;

        window.__summitAnalyticsLoaded = true;

        window.dataLayer = window.dataLayer || [];
        window.gtag = window.gtag || function() { dataLayer.push(arguments); };
        window.gtag('js', new Date());
        window.gtag('config', gaMeasurementId);

        if (!document.querySelector('script[data-ga-id="' + gaMeasurementId + '"]')) {
            var gaScript = document.createElement('script');
            gaScript.async = true;
            gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaMeasurementId;
            gaScript.dataset.gaId = gaMeasurementId;
            document.head.appendChild(gaScript);
        }
    }

    // Function to handle cookie consent
    function handleCookieConsent(consentGiven) {
        var date = new Date();
        date.setTime(date.getTime() + (365*24*60*60*1000)); // Set cookie to expire in one year
        var expires = "expires=" + date.toUTCString();
        var consent = consentGiven ? "yes" : "no";
        var secureFlag = window.location.protocol === "https:" ? "; Secure" : "";
        document.cookie = "accepted_cookies=" + consent + "; " + expires + "; path=/; SameSite=Lax" + secureFlag;
        cookieOverlay.style.display = "none";
        
        if (consentGiven) {
            loadGoogleAnalytics();
        }
    }

    // Check for existing consent or load GA if consented
    if (document.cookie.indexOf("accepted_cookies=yes") !== -1) {
        loadGoogleAnalytics();
    } else if (document.cookie.indexOf("accepted_cookies=no") === -1) {
        // Only display the cookie overlay if there is no cookie set to 'no'
        cookieOverlay.style.display = "flex";
    }


    // Event listeners
    document.querySelector(".accept-cookies").addEventListener("click", function() {
        handleCookieConsent(true);
    });
    document.querySelector(".reject-cookies").addEventListener("click", function() {
        handleCookieConsent(false);
    });
    document.querySelector(".close-cookies").addEventListener("click", function() {
        cookieOverlay.style.display = "none";
    });
});


