function openTab(tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.style.display = 'none');

    // Deactivate all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show the selected tab content and activate the selected tab
    const selectedTabContent = document.getElementById(`content-${tabId}`);
    selectedTabContent.style.display = 'block';

    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');
}

function validateAndDonate() {
    // Get form values
    var amount = document.getElementById("amount").value.trim();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    // Clear input values
    document.getElementById("amount").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    // Validate amount
    if (!isValidAmount(amount)) {
        alert("Please enter a valid donation amount (numeric value only).");
        return;
    }

    // Validate name
    if (!isValidName(name)) {
        alert("Please enter a valid name (letters and spaces only).");
        return;
    }

    // Validate email (simple validation for demonstration purposes)
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Perform fake donation (replace this with actual donation logic)
    alert("Thank you for your donation!");
}

function isValidAmount(amount) {
    // Check if the amount is a positive numeric value
    return /^[0-9]+$/.test(amount);
}

function isValidName(name) {
    // Check if the name contains only letters and spaces
    return /^[a-zA-Z\s]+$/.test(name);
}

function isValidEmail(email) {
    // Simple email validation for demonstration purposes
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

