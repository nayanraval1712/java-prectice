document.addEventListener('DOMContentLoaded', () => {
  const ratingButtons = document.querySelectorAll('.rating .one');
  const submitButton = document.querySelector('.btn');
  const container = document.querySelector('.container');

  let selectedRating = null;

  // Handle rating button clicks
  ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'selected' class from all buttons
      ratingButtons.forEach(btn => btn.classList.remove('selected'));

      // Add 'selected' class to the clicked button
      button.classList.add('selected');

      // Store the selected rating
      selectedRating = button.textContent;
    });
  });

  // Handle submit button click
  submitButton.addEventListener('click', () => {
    if (selectedRating) {
      // Create and display the thank-you card
      const thankYouCard = document.createElement('div');
      thankYouCard.className = 'thank-you-card';

      thankYouCard.innerHTML = `
          <div class="thank-you-message">
            <h3>Thank you!</h3>
            <p>You selected ${selectedRating} out of 5</p>
            <p>We appreciate your feedback!</p>
          </div>
        `;

      // Clear the container and append the thank-you card
      container.innerHTML = '';
      container.appendChild(thankYouCard);
    } else {
      // Optionally, handle the case where no rating is selected
      alert('Please select a rating before submitting.');
    }
  });
});
