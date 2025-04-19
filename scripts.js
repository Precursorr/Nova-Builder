// Simple initialization script
document.addEventListener('DOMContentLoaded', () => {
    console.log('Nova Builder initialized');

    // Add a click event to the message container for demonstration
    const messageContainer = document.querySelector('.message-container');
    if (messageContainer) {
        messageContainer.addEventListener('click', () => {
            messageContainer.querySelector('p').textContent = 'Admiral selection coming soon...';
        });
    }

    // Add a click event to the add new admiral option
    const addNewOption = document.querySelector('.admiral-option.add-new');
    if (addNewOption) {
        addNewOption.addEventListener('click', () => {
            alert('Create a new Admiral feature coming soon!');
        });
    }
});

