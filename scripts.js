// Simple initialization script
document.addEventListener('DOMContentLoaded', () => {
    console.log('Nova Builder initialized');

    // DOM Elements
    const messageContainer = document.querySelector('.message-container');
    const addNewOption = document.querySelector('.admiral-option.add-new');
    const admiralModal = document.getElementById('admiral-selection-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const admiralCards = document.querySelectorAll('.admiral-card');

    // Add a click event to the message container for demonstration
    if (messageContainer) {
        messageContainer.addEventListener('click', () => {
            messageContainer.querySelector('p').textContent = 'Click the + button to select an Admiral';
        });
    }

    // Open the admiral selection modal when clicking the add new button
    if (addNewOption) {
        addNewOption.addEventListener('click', () => {
            admiralModal.classList.add('show');
        });
    }

    // Close the modal when clicking the X button
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            admiralModal.classList.remove('show');
        });
    }

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === admiralModal) {
            admiralModal.classList.remove('show');
        }
    });

    // Handle admiral card selection
    admiralCards.forEach(card => {
        card.addEventListener('click', () => {
            const admiralName = card.querySelector('.admiral-name').textContent;
            admiralModal.classList.remove('show');

            // Special case for Admiral Morpheus
            if (admiralName === 'Admiral Morpheus') {
                // Clear the main content, keeping only header and footer
                const contentContainer = document.querySelector('.content-container');
                if (contentContainer) {
                    // Hide the content container
                    contentContainer.style.display = 'none';

                    // Add a return button after a short delay
                    setTimeout(() => {
                        // Create a return button
                        const returnButton = document.createElement('button');
                        returnButton.className = 'return-button';
                        returnButton.textContent = 'Return to Admiral Selection';

                        // Add click event to return button
                        returnButton.addEventListener('click', () => {
                            // Remove the return button
                            returnButton.remove();

                            // Show the content container again
                            contentContainer.style.display = 'flex';
                        });

                        // Add it to the main element
                        document.querySelector('main').appendChild(returnButton);
                    }, 500);
                }
            } else {
                // For other admirals, just show an alert for now
                alert(`Selected ${admiralName}`);
            }
        });
    });
});

