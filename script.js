document.addEventListener('DOMContentLoaded', () => {
    
    // 1. PAGE LOAD ANIMATION (Fade In)
    // Add the class that triggers the CSS fade-in
    document.body.classList.add('page-loaded');

    // 2. PAGE EXIT ANIMATION (Fade Out)
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Check if it's an internal link (not an external website or anchor)
            const targetUrl = link.getAttribute('href');
            if (targetUrl && !targetUrl.startsWith('#') && !targetUrl.startsWith('http')) {
                e.preventDefault(); // Stop the browser from instantly loading the new page
                
                // Add the class that triggers the CSS fade-out
                document.body.classList.add('page-exiting');
                
                // Wait for the animation to finish (600ms matches the CSS), then go to the new page
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 600);
            }
        });
    });
});