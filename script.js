function showTab(tabName) {
    document.getElementById("riders").style.display = "none";
    document.getElementById("drivers").style.display = "none";
    document.getElementById(tabName).style.display = "flex";

    let tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => tab.classList.remove("active"));

    if (tabName === "riders") {
        tabs[0].classList.add("active");
    } else {
        tabs[1].classList.add("active");
    }
}
