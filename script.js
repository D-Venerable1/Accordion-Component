'use strict'; // Enables strict mode which helps catch common coding errors and "unsafe" actions.

// Define the function to toggle the accordion
function toggleAccordion(element) {
  // Get the parent element of the clicked header (the accordion item)
  const accordionItem = element.parentElement;

  // Find the content section within the clicked accordion item
  const content = accordionItem.querySelector('.accordion-content');

  // Select all accordion items on the page
  const allItems = document.querySelectorAll('.accordion-item');

  // Loop through all accordion items
  allItems.forEach(item => {
    // If the item is not the one clicked
    if (item !== accordionItem) {
      // Remove the 'active' class from the item (collapse it)
      item.classList.remove('active');

      // Set the max-height of its content to null (so it's collapsed)
      item.querySelector('.accordion-content').style.maxHeight = null;

      // Set the icon text back to the plus symbol
      item.querySelector('.icon').textContent = '+';
    }
  });

  // Check if the clicked accordion item is already active (open)
  if (accordionItem.classList.contains('active')) {
    // If it is, remove the 'active' class (collapse it)
    accordionItem.classList.remove('active');

    // Set the max-height of its content to null (so it's collapsed)
    content.style.maxHeight = null;

    // Change the icon text back to the plus symbol
    element.querySelector('.icon').textContent = '+';
  } else {
    // If it's not active, add the 'active' class (expand it)
    accordionItem.classList.add('active');

    // Set the max-height of its content to its scrollHeight (expand it to show content)
    content.style.maxHeight = content.scrollHeight + "px";

    // Change the icon text to the cross symbol
    element.querySelector('.icon').innerHTML = '<i class="fa-solid fa-xmark"></i>';

  }
}

// Select all elements with the class 'accordion-header'
const headers = document.querySelectorAll('.accordion-header');

// Loop through each header element
headers.forEach(header => {
  // Add a click event listener to each header
  header.addEventListener('click', function() {
    // Call the toggleAccordion function, passing the clicked header as the argument
    toggleAccordion(this);
  });
});
