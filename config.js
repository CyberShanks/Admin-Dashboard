console.log("Connected");
var nightTime = false;

const searchElement = document.querySelector("#search");
const notificationElement = document.querySelector("#notification");
const buttonOptions = document.querySelectorAll(".project-options");
const night = document.querySelector("#night");

const searchBar = document.querySelector("#search-bar");
const newButton = document.querySelector("#new");
const uploadButton = document.querySelector("#upload");
const shareButton = document.querySelector("#share");
const sideBar = document.querySelector(".side-bar");
const content = document.querySelector(".content");
const footer = document.querySelector(".footer");
const projectParentContainers = document.querySelectorAll(".project-parent-container");
const announcementContainer = document.querySelector(".announcement-container");
const trendingContainer = document.querySelector(".trending-container");
const navbar = document.querySelector(".navbar");

console.log("done with connections");

const nightMode = document.querySelector(".light-mode");

nightMode.addEventListener('click', () => {

    if (nightTime == false){
        //toggle dark-mode
        searchBar.style.background = 'var(--dark-searchbar)';
        newButton.style.color = 'var(--dark-color-back-font-color)';
        uploadButton.style.color = 'var(--dark-color-back-font-color)';
        shareButton.style.color = 'var(--dark-color-back-font-color)';
        newButton.style.background = 'var(--dark-sidebar-background)';
        uploadButton.style.background = 'var(--dark-sidebar-background)';
        shareButton.style.background = 'var(--dark-sidebar-background)';
        sideBar.style.backgroundColor = 'var(--dark-sidebar-background)';
        sideBar.style.color = 'var(--dark-color-back-font-color)';
        content.style.backgroundColor = 'var(--dark-content-background)';
        content.style.color = 'var(--dark-white-back-font-color)';
        footer.style.color = 'var(--dark-color-back-font-color)';

        projectParentContainers.forEach(projectContainer => {
            projectContainer.style.borderColor = 'var(--dark-border-color)';
            projectContainer.style.backgroundColor = 'var(--dark-content-background-color)';
        })
        
        announcementContainer.style.borderColor = 'var(--dark-border-color)';
        trendingContainer.style.borderColor = 'var(--dark-border-color)';
        announcementContainer.style.backgroundColor = 'var(--dark-content-background-color)';
        trendingContainer.style.backgroundColor = 'var(--dark-content-background-color)';
        navbar.style.backgroundColor = 'var(--dark-content-background-color)';
        navbar.style.color = 'var(--dark-color-back-font-color)';

        searchElement.style.filter = 'invert(99%) sepia(6%) saturate(22%) hue-rotate(221deg) brightness(105%) contrast(100%)';
        notificationElement.style.filter = 'invert(99%) sepia(6%) saturate(22%) hue-rotate(221deg) brightness(105%) contrast(100%)';

        buttonOptions.forEach(buttonOption => buttonOption.style.filter = 'invert(99%) sepia(6%) saturate(22%) hue-rotate(221deg) brightness(105%) contrast(100%)');
        
        night.style.filter = 'invert(99%) sepia(6%) saturate(22%) hue-rotate(221deg) brightness(105%) contrast(100%)';
        console.log("switched!");
        nightTime = true;

    }

    else {
        searchBar.style.background = 'var(--light-searchbar)';
        newButton.style.color = 'var(--light-color-back-font-color)';
        uploadButton.style.color = 'var(--light-color-back-font-color)';
        shareButton.style.color = 'var(--light-color-back-font-color)';
        newButton.style.background = 'var(--light-sidebar-background)';
        uploadButton.style.background = 'var(--light-sidebar-background)';
        shareButton.style.background = 'var(--light-sidebar-background)';
        sideBar.style.backgroundColor = 'var(--light-sidebar-background)';
        sideBar.style.color = 'var(--light-color-back-font-color)';
        content.style.backgroundColor = 'var(--light-content-background)';
        content.style.color = 'var(--light-white-back-font-color)';
        footer.style.color = 'var(--light-color-back-font-color)';

        projectParentContainers.forEach(projectContainer => {
            projectContainer.style.borderColor = 'var(--light-border-color)';
            projectContainer.style.backgroundColor = 'var(--light-content-background-color)';
        })
        
        announcementContainer.style.borderColor = 'var(--light-border-color)';
        trendingContainer.style.borderColor = 'var(--light-border-color)';
        announcementContainer.style.backgroundColor = 'var(--light-content-background-color)';
        trendingContainer.style.backgroundColor = 'var(--light-content-background-color)';
        navbar.style.backgroundColor = 'var(--light-content-background-color)';
        navbar.style.color = 'var(--light-white-back-font-color)';

        searchElement.style.filter = '';
        notificationElement.style.filter = '';

        buttonOptions.forEach(buttonOption => buttonOption.style.filter = '');
        
        night.style.filter = '';
        console.log("switched!");
        nightTime = false;
    }
});

console.log("cna");