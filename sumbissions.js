document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("addButton");
    const pageContainer = document.getElementById("pageContainer");

    addButton.addEventListener("click", function() {
      // Create a new textarea element
      const newTextarea = document.createElement("textarea");
      newTextarea.placeholder = "Enter your CODE here";

      // Set the CSS styles for the new textarea
      newTextarea.style.minHeight = "30vw"; // Minimum height 30% of viewport width
      newTextarea.style.minWidth = "20vw"; // Minimum width 50% of viewport width

      // Append the new textarea to the pageContainer
      pageContainer.appendChild(newTextarea);
    });
  });

  const deleteButtons = document.querySelectorAll('.delete-button');

  // Add a click event listener to each delete button
  deleteButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Get the parent page element
      const page = button.parentNode;
      
      // Remove the page from the pageContainer
      document.getElementById('pageContainer').removeChild(page);
    });
  });

  document.getElementById("addButton2").addEventListener("click", function () {
    var inputBox2 = document.getElementById("inputBox2");
    var inputBox = document.getElementById("inputBox");
    let suggestion = document.getElementById("inputBox3");
    inputBox2.style.display = inputBox2.style.display === "none" ? "block" : "none";
    inputBox.style.display = inputBox.style.display === "none" ? "block" : "none";
    suggestion.style.display = inputBox.style.display === "none" ? "flex" : "none";
  });