import Work1 from '../../assets/work1.jpg'
import Work2 from '../../assets/work2.jpg'
import Work3 from '../../assets/work3.jpg'
import Work4 from '../../assets/work4.jpg'
import Work5 from '../../assets/work5.jpg'
import Work6 from '../../assets/work1.jpg' // Assuming this is intentional, same as Work1

export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: 'Login and Registration',
        category: 'web', // Standardized to lowercase
        demoLink: "https://ivandancil.github.io/LoginRegistration/", // Full URL recommended for external links
        repoLink: "https://github.com/ivandancil/LoginRegistration.git",
    },
    {
        id: 2,
        image: Work2,
        title: 'React Porfolio',
        category: 'app',
        demoLink: "https://ivandancil.github.io/", // Assuming this is the current portfolio. Change as needed.
        repoLink: "https://github.com/ivandancil/ivandancil.github.io.git",
    },
    {
        id: 3,
        image: Work3,
        title: 'React Dashboard',
        category: 'design',
        demoLink: "#", // Placeholder: Replace with actual demo or GitHub link
    },
    {
        id: 4,
        image: Work4,
        title: 'Todo List',
        category: 'app',
        demoLink: "https://ivandancil.github.io/TodoList/", // Placeholder: Replace with actual demo or GitHub link
        repoLink: "https://github.com/ivandancil/TodoList.git",
    },
    {
        id: 5,
        image: Work5,
        title: 'Music Player',
        category: 'web', // Standardized to lowercase
        demoLink: "https://ivandancil.github.io/MusicPlayer/", // Placeholder: Replace with actual demo or GitHub link
        repoLink: "https://github.com/ivandancil/MusicPlayer.git",
    },
    {
        id: 6,
        image: Work6,
        title: 'Image Gallery',
        category: 'web', // Standardized to lowercase
        demoLink: "https://ivandancil.github.io/ImageGallery/", // Placeholder: Replace with actual demo or GitHub link
        repoLink: "https://github.com/ivandancil/ImageGallery.git",
    },

];

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'web', // Standardized to lowercase
    },
    {
        name: 'app',
    },
    {
        name: 'design',
    },
]