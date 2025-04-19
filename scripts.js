// Simple initialization script
document.addEventListener('DOMContentLoaded', () => {
    console.log('Nova Builder initialized');

    // Add a click event to the content placeholder for demonstration
    const contentPlaceholder = document.querySelector('.content-placeholder');
    if (contentPlaceholder) {
        contentPlaceholder.addEventListener('click', () => {
            contentPlaceholder.innerHTML = '<p>Ready to build your new layout!</p>';
        });
    }
});

