const pageLoad = () => {
    
    const body = document.querySelector("body");
    const content = document.createElement("div");
    content.id = "content";
    body.appendChild(content);
    
    const header = document.createElement("div");
    header.id = "header";
    content.appendChild(header);

    const navBar = document.createElement("div");
    navBar.id = "navBar";
    header.appendChild(navBar);

    const restName = document.createElement("div");
    restName.id = "restName";
    restName.textContent = "Taqueria Tortuga";
    navBar.appendChild(restName);

    const navButtons = document.createElement("div");
    navButtons.id = "navButtons";
    navBar.appendChild(navButtons);

    const homeTab = document.createElement("div");
    homeTab.id = "homeButton";
    homeTab.textContent = "Home";
    homeTab.classList.add("navigation");
    navButtons.appendChild(homeTab);

    const menuTab = document.createElement("div");
    menuTab.id = "menuButton";
    menuTab.textContent = "Menu";
    menuTab.classList.add("navigation");
    navButtons.appendChild(menuTab);
}

export { pageLoad };