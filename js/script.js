// --- 50 PROJECT DATA ENTRIES ---
const projectData = {
    // REAL PROJECTS (Based on your input)
    "peace-poverty": {
        title: "Peace Poverty (RTS Game)",
        date: "Dec 2025",
        description: "Status: **In Active Development.** A real-time strategy mobile game inspired by Clash Royale, focusing on deep unit synergy and competitive ladder design. Built to master advanced state management.",
        link: "#",
        linkText: "Follow Development"
    },
    "encryptofun": {
        title: "Encryptofun",
        date: "Jul 2025",
        description: "A deployed single-page application offering basic encryption and encoding tools (Base64, Caesar Cipher). Demonstrates proficiency in DOM manipulation and vanilla JavaScript.",
        link: "https://encryptofun.netlify.app",
        linkText: "View Live Project"
    },
    "itch-portfolio": {
        title: "Itch.io Games",
        date: "Ongoing",
        description: "A collection of various short-form game jam projects and prototypes developed using Godot Engine, showcasing rapid prototyping and creative design skills.",
        link: "https://itch.io/[Your-Profile]",
        linkText: "View Itch.io Profile"
    },
    // FICTIONAL WEB DEVELOPMENT PROJECTS
    "taskflow": {
        title: "TaskFlow Kanban App",
        date: "Nov 2025",
        description: "A drag-and-drop task management tool built with React and Redux for state management, featuring persistent storage via local storage.",
        link: "#",
        linkText: "View Demo"
    },
    "chat-interface": {
        title: "Real-Time Chat Interface",
        date: "Oct 2025",
        description: "A simple chat application utilizing WebSockets (Socket.IO) for instant, bi-directional communication, focusing on minimal latency.",
        link: "https://realtimechat-yxyl.onrender.com",
        linkText: "View Site"
    },
    "weather-api": {
        title: "Weather Dashboard API",
        date: "Sep 2025",
        description: "A dynamic forecast application consuming the OpenWeatherMap API, built with Vue.js and featuring location searching and dynamic backgrounds.",
        link: "#",
        linkText: "View Demo"
    },
    "ecommerce-clone": {
        title: "E-commerce Product Clone",
        date: "Sep 2025",
        description: "A pixel-perfect front-end reproduction of a major retailer's product detail page, demonstrating advanced CSS Grid and Flexbox layouts.",
        link: "#",
        linkText: "View Mockup"
    },
    "portfolio-gen": {
        title: "Portfolio Template Generator",
        date: "Aug 2025",
        description: "A Node.js command-line application that generates static HTML portfolios from user input via a series of prompts.",
        link: "#",
        linkText: "View Code"
    },
    "quiz-builder": {
        title: "Interactive Quiz Builder",
        date: "Jul 2025",
        description: "An application allowing users to create custom quizzes with score tracking, built entirely with vanilla JavaScript and responsive design.",
        link: "#",
        linkText: "View Demo"
    },
    "css-library": {
        title: "CSS Animation Library",
        date: "Jun 2025",
        description: "A small open-source collection of reusable, keyframe-based CSS animations designed for micro-interactions and transitions.",
        link: "#",
        linkText: "View Library"
    },
    "event-finder": {
        title: "Local Event Finder",
        date: "Jun 2025",
        description: "A geo-location enabled website that filters and displays events based on user proximity, using the Google Maps API and a mock backend.",
        link: "#",
        linkText: "View Demo"
    },
    "recipe-pwa": {
        title: "Recipe Book PWA",
        date: "May 2025",
        description: "A Progressive Web App (PWA) allowing users to save recipes for offline access, utilizing Service Workers and IndexedDB.",
        link: "#",
        linkText: "View App"
    },
    "markdown-previewer": {
        title: "Markdown Previewer",
        date: "Apr 2025",
        description: "A split-screen utility that renders Markdown syntax in real-time, demonstrating regex parsing and DOM manipulation techniques.",
        link: "#",
        linkText: "View Tool"
    },
    "accessibility-tool": {
        title: "Accessibility Audit Tool",
        date: "Apr 2025",
        description: "A small JavaScript bookmarklet designed to highlight common accessibility issues (e.g., missing alt tags, low contrast) on any webpage.",
        link: "#",
        linkText: "View Code"
    },
    "music-ui": {
        title: "Simple Music Player UI",
        date: "Mar 2025",
        description: "A sleek, dark-themed interface for a desktop music player, focusing on custom scrollbars, complex layout, and UI polish.",
        link: "#",
        linkText: "View UI"
    },
    "blog-cms": {
        title: "Blog CMS Frontend (Gatsby)",
        date: "Mar 2025",
        description: "The front-end build for a static blog, using Gatsby (React) and GraphQL to fetch content, focusing on performance and SEO optimization.",
        link: "#",
        linkText: "View Site"
    },
    "image-gallery-filter": {
        title: "Image Gallery Filter",
        date: "Feb 2025",
        description: "A photo gallery built using pure CSS for layout and JavaScript for dynamic filtering and sorting of image tags.",
        link: "#",
        linkText: "View Gallery"
    },
    "custom-preloader": {
        title: "Custom Preloader Generator",
        date: "Jan 2025",
        description: "A tool that generates custom CSS-only loading spinners and provides the required code snippets for easy integration.",
        link: "#",
        linkText: "View Generator"
    },
    "local-business": {
        title: "Local Business Redesign",
        date: "Nov 2024",
        description: "A responsive redesign project for a local coffee shop, focused on modernizing the UI/UX, improving accessibility, and demonstrating media query mastery.",
        link: "#",
        linkText: "View Mockup"
    },
    
    // FICTIONAL GAME DEVELOPMENT PROJECTS
    "last-starship": {
        title: "The Last Starship (2D Shooter)",
        date: "Dec 2025",
        description: "A classic top-down arcade shooter developed in Godot, implementing object pooling and complex enemy wave generation algorithms.",
        link: "#",
        linkText: "Play Game"
    },
    "dungeon-crawler": {
        title: "Procedural Dungeon Crawler",
        date: "Nov 2025",
        description: "A prototype focusing on procedural map generation using cellular automata algorithms for randomized, replayable level design.",
        link: "#",
        linkText: "View Demo"
    },
    "tower-defense": {
        title: "Tower Defense AI Logic",
        date: "Oct 2025",
        description: "A demonstration of sophisticated enemy pathing and targeting AI for a tower defense game, built with C# (Unity).",
        link: "#",
        linkText: "View Code"
    },
    "visual-novel": {
        title: "Visual Novel Framework",
        date: "Sep 2025",
        description: "A reusable dialogue and branching narrative system created in Ren'Py/Python, focused on asset management and state transitions.",
        link: "#",
        linkText: "View Framework"
    },
    "physics-platformer": {
        title: "Physics-Based Platformer",
        date: "Aug 2025",
        description: "A custom 2D physics engine implemented from scratch in JavaScript for web deployment, demonstrating vector math and collision detection.",
        link: "#",
        linkText: "View Demo"
    },
    "mini-golf": {
        title: "Miniature Golf Simulation",
        date: "Jul 2025",
        description: "A simple Unity project simulating accurate ball-and-surface physics, used to study raycasting and material interaction.",
        link: "#",
        linkText: "View Simulation"
    },
    "flappy-clone": {
        title: "Flappy Bird Clone (Study)",
        date: "Jun 2025",
        description: "A tutorial-based clone project built to master frame-rate independent updates and simple game state management.",
        link: "#",
        linkText: "Play Game"
    },
    "inventory-system": {
        title: "Inventory System Module",
        date: "May 2025",
        description: "A highly reusable, object-oriented inventory and crafting system designed to be dropped into any RPG prototype.",
        link: "#",
        linkText: "View Code"
    },
    "particle-effects": {
        title: "Particle Effect Showcase",
        date: "Apr 2025",
        description: "A collection of custom particle effects (fire, water, energy) created in Unity's Shuriken system, optimizing for mobile performance.",
        link: "#",
        linkText: "View Showcase"
    },
    "tilemap-editor": {
        title: "Tilemap Editor Extension",
        date: "Mar 2025",
        description: "A custom editor tool for the Godot Engine that streamlines the process of painting large-scale 2D tilemaps.",
        link: "#",
        linkText: "View Tool"
    },
    "multiplayer-test": {
        title: "Multiplayer Network Test",
        date: "Feb 2025",
        description: "A proof-of-concept project demonstrating basic client-server communication using Photon Unity Networking (PUN) for small-scale co-op games.",
        link: "#",
        linkText: "View Demo"
    },
    "ai-battle-sim": {
        title: "AI Faction Battle Simulator",
        date: "Jan 2025",
        description: "A non-player interaction simulation where two distinct AI teams clash on a map, designed to test decision-making trees.",
        link: "#",
        linkText: "View Simulation"
    },
    "rhythm-prototype": {
        title: "Simple Rhythm Game Prototype",
        date: "Dec 2024",
        description: "A prototype focusing on precise timing and synchronization of visual cues to music tracks, built using JavaScript/HTML Audio API.",
        link: "#",
        linkText: "Play Prototype"
    },
    "isometric-map": {
        title: "Isometric Map Renderer",
        date: "Nov 2024",
        description: "A project focusing on correctly rendering 2D sprites in an isometric view to create depth without 3D assets.",
        link: "#",
        linkText: "View Renderer"
    },
    "save-load": {
        title: "Save/Load System",
        date: "Oct 2024",
        description: "A robust system using JSON serialization to safely save and load player progress and game state across sessions.",
        link: "#",
        linkText: "View Code"
    },
    "pixel-art-tool": {
        title: "Pixel Art Tool Palette",
        date: "Sep 2024",
        description: "A web-based tool allowing users to select colors from a custom pixel art palette and generate color schemes.",
        link: "#",
        linkText: "View Tool"
    },

    // FICTIONAL DATA & UTILITIES PROJECTS
    "csv-converter": {
        title: "CSV to JSON Converter",
        date: "Dec 2025",
        description: "A lightweight JavaScript utility that processes large CSV files client-side and outputs formatted JSON data, ensuring data integrity.",
        link: "#",
        linkText: "View Utility"
    },
    "blockchain-sim": {
        title: "Basic Blockchain Simulator",
        date: "Nov 2025",
        description: "A Python script demonstrating the core concepts of hashing, proof-of-work, and immutability in a simple simulated blockchain.",
        link: "#",
        linkText: "View Code"
    },
    "sentiment-analyzer": {
        title: "Twitter Sentiment Analyzer",
        date: "Oct 2025",
        description: "A proof-of-concept using Python and the TextBlob library to scrape recent tweets and classify public sentiment (positive/negative/neutral).",
        link: "#",
        linkText: "View Code"
    },
    "budget-tracker": {
        title: "Personal Budget Tracker",
        date: "Sep 2025",
        description: "A web app using D3.js to visualize monthly spending data in interactive bar and pie charts, focusing on financial planning.",
        link: "#",
        linkText: "View Tool"
    },
    "pricing-generator": {
        title: "SaaS Pricing Page Generator",
        date: "Aug 2025",
        description: "A utility that quickly generates beautifully designed, responsive pricing tiers based on user-defined features and costs.",
        link: "#",
        linkText: "View Generator"
    },
    "mnist-classifier": {
        title: "ML MNIST Classifier",
        date: "Jul 2025",
        description: "An introductory TensorFlow/Keras project that successfully trains a convolutional neural network to classify handwritten digits (98% accuracy).",
        link: "#",
        linkText: "View Notebook"
    },
    "password-meter": {
        title: "Password Strength Meter",
        date: "Jun 2025",
        description: "A custom JavaScript component that provides real-time feedback on password complexity using entropy scoring.",
        link: "#",
        linkText: "View Component"
    },
    "file-renamer": {
        title: "Command Line File Renamer",
        date: "May 2025",
        description: "A utility written in Bash that allows batch renaming of files based on user-defined regex patterns.",
        link: "#",
        linkText: "View Script"
    },
    "map-data-layer": {
        title: "Interactive Map Data Layer",
        date: "Apr 2025",
        description: "A project using Leaflet.js to overlay custom geographical data (GeoJSON) onto a map, allowing users to click and view details.",
        link: "#",
        linkText: "View Map"
    },
    "crypto-tracker": {
        title: "Cryptocurrency Price Tracker",
        date: "Mar 2025",
        description: "A small application that pulls data from a public crypto exchange API and displays live price changes using charts.",
        link: "#",
        linkText: "View Tracker"
    },
    "data-filter": {
        title: "Data Filtering Component",
        date: "Feb 2025",
        description: "A reusable front-end component designed for filtering large data tables efficiently using user input fields and dropdowns.",
        link: "#",
        linkText: "View Component"
    },
    "book-engine": {
        title: "Book Recommendation Engine",
        date: "Jan 2025",
        description: "A script that provides book recommendations based on user input, using cosine similarity to match preferences against a book database.",
        link: "#",
        linkText: "View Code"
    },
    "performance-monitor": {
        title: "Website Performance Monitor",
        date: "Dec 2024",
        description: "A simple dashboard that tracks key performance indicators (TTFB, FCP) for a website using the Browser Performance API.",
        link: "#",
        linkText: "View Dashboard"
    },
    "logging-utility": {
        title: "Custom Logging Utility",
        date: "Nov 2024",
        description: "A JavaScript module designed to provide enhanced console logging with custom colors and timestamps for better debugging.",
        link: "#",
        linkText: "View Utility"
    },
    "dark-mode": {
        title: "Interactive Light/Dark Mode Toggle",
        date: "Oct 2024",
        description: "A demonstration of managing state and applying dynamic CSS variables using JavaScript to switch between themes instantly.",
        link: "#",
        linkText: "View Toggle"
    },
    "time-warp": {
        title: "Time-Warp Visualizer",
        date: "Sep 2024",
        description: "A complex SVG animation project that visualizes distorted time and space effects using math functions and CSS transformations.",
        link: "#",
        linkText: "View Demo"
    },
};

// --- JAVASCRIPT LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    // Only run this script on the projects.html page (or a page containing the grid)
    const projectGrid = document.getElementById('projectGrid');
    if (!projectGrid) return; 

    const modal = document.getElementById('project-modal');
    const modalContent = modal.querySelector('.modal-content');

    // 1. Generate Grid Items from Project Data
    Object.keys(projectData).forEach(id => {
        const data = projectData[id];
        const item = document.createElement('div');
        item.className = 'grid-item';
        item.setAttribute('data-id', id);
        item.innerHTML = `
            <h3>${data.title}</h3>
            <p class="date">${data.date}</p>
        `;
        projectGrid.appendChild(item);
    });
    
    // 2. Modal Functions
    function showModal(projectId) {
        const data = projectData[projectId];
        if (data) {
            modalContent.innerHTML = `
                <span class="close-btn">&times;</span>
                <h2>${data.title} (${data.date})</h2>
                <p>${data.description}</p>
                <a href="${data.link}" target="_blank" class="project-link">${data.linkText}</a>
            `;
            modalContent.querySelector('.close-btn').onclick = hideModal;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        }
    }

    function hideModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // 3. Attach Event Listeners 
    projectGrid.addEventListener('click', (event) => {
        const item = event.target.closest('.grid-item');
        if (item) {
            showModal(item.getAttribute('data-id'));
        }
    });

    // 4. Close the modal on outside click
    window.onclick = function(event) {
        if (event.target === modal) {
            hideModal();
        }
    };
});
