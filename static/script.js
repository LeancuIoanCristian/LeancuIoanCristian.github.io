// Function to toggle between dark and light mode
function toggleMode() {
    let element = document.body;
    let button = document.getElementById('modeToggle');
    // Optional: If you plan to change the icon itself based on mode (e.g., lightbulb -> moon/sun)
    // let icon = button.querySelector('i');

    if (element.classList.contains('dark-mode')) {
        element.classList.remove('dark-mode');
        element.classList.add('light-mode');
        // Example icon change:
        // icon.classList.remove('fa-moon');
        // icon.classList.add('fa-sun');
    } else {
        element.classList.remove('light-mode'); // Ensure light-mode is removed if it was explicitly set
        element.classList.add('dark-mode');
        // Example icon change:
        // icon.classList.remove('fa-sun');
        // icon.classList.add('fa-moon');
    }
    // Store user's preference in localStorage
    localStorage.setItem('theme', element.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Apply saved preference on page load
document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        // If you implement icon changes, make sure the icon reflects the initial state here too
        // let button = document.getElementById('modeToggle');
        // if (button) { // Check if the button exists before querying its children
        //     let icon = button.querySelector('i');
        //     if (icon) icon.classList.add('fa-moon');
        // }
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode'); // Ensure explicit light-mode class for consistent styling
        // let button = document.getElementById('modeToggle');
        // if (button) {
        //     let icon = button.querySelector('i');
        //     if (icon) icon.classList.add('fa-sun');
        // }
    }
});