document.addEventListener('DOMContentLoaded', () => {
    // **TROUBLESHOOTING STEP 2:** Check if the JavaScript code is running at all.
    // You can add a simple console log here to see if it gets executed.
    console.log('script.js loaded');

    const animatedButton = document.getElementById('animatedButton');
    const animatedImage = document.getElementById('animatedImage');
    const themeSelect = document.getElementById('theme');
    const body = document.body;

    // **TROUBLESHOOTING STEP 3:** Ensure the element IDs are correct.
    // Log the elements to the console to see if they are being selected.
    console.log('animatedButton:', animatedButton);
    console.log('animatedImage:', animatedImage);
    console.log('themeSelect:', themeSelect);
    console.log('body:', body);

    // --- Local Storage for Theme Preference ---
    function saveThemePreference(theme) {
        localStorage.setItem('userTheme', theme);
    }

    function getThemePreference() {
        return localStorage.getItem('userTheme') || 'light'; // Default to light
    }

    function applyTheme(theme) {
        body.className = theme === 'dark' ? 'dark-theme' : '';
    }

    // Apply saved theme on page load
    const savedTheme = getThemePreference();
    applyTheme(savedTheme);
    themeSelect.value = savedTheme;

    // Listen for theme changes
    themeSelect.addEventListener('change', (event) => {
        const selectedTheme = event.target.value;
        applyTheme(selectedTheme);
        saveThemePreference(selectedTheme);
    });

    // --- Animation Triggered by User Action (Button Click) ---
    if (animatedButton) { // **TROUBLESHOOTING STEP 4:** Check if the button element was found.
        animatedButton.addEventListener('click', () => {
            console.log('Button clicked'); // Check if the click listener is working.
            animatedButton.classList.add('animate-button');
            setTimeout(() => {
                animatedButton.classList.remove('animate-button');
            }, 1000); // Matches the animation duration
        });
    } else {
        console.error('animatedButton element not found!');
    }

    // --- Another Animation Triggered by User Action (Image Hover) ---
    let isImageSlid = false;
    if (animatedImage) { // **TROUBLESHOOTING STEP 5:** Check if the image element was found.
        animatedImage.addEventListener('mouseover', () => {
            console.log('Mouse over image'); // Check if the mouseover listener is working.
            if (!isImageSlid) {
                animatedImage.classList.add('slide-right');
                animatedImage.classList.remove('slide-back');
                isImageSlid = true;
                console.log('Image slid right');
            }
        });

        animatedImage.addEventListener('mouseout', () => {
            console.log('Mouse out of image'); // Check if the mouseout listener is working.
            if (isImageSlid) {
                animatedImage.classList.remove('slide-right');
                animatedImage.classList.add('slide-back');
                isImageSlid = false;
                console.log('Image slid back');
            }
        });
    } else {
        console.error('animatedImage element not found!');
    }
});

// **TROUBLESHOOTING STEP 6:** Open your browser's developer console (usually by pressing F12).
// Look for any error messages in the "Console" tab. These will give you clues about what's going wrong.