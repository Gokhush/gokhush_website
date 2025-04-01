function showTab(tabName) {
    // Hide all tab content containers
    document.getElementById("riders").style.display = "none";
    document.getElementById("drivers").style.display = "none";

    // Show the selected tab content container
    document.getElementById(tabName).style.display = "flex";

    // Remove the "active" class from all tabs
    let tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => tab.classList.remove("active"));

    // Add the "active" class to the clicked tab
    tabs.forEach(tab => {
        if (tab.getAttribute("onclick").includes(tabName)) {
            tab.classList.add("active");
        }
    });
}