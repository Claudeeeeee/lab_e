// script.ts

interface AppState {
    currentStyle: string;
    styles: { [key: string]: string };
}

const appState: AppState = {
    currentStyle: 'styleRWD.css', // Default style
    styles: {
        styleRWD: 'styleRWD.css',
        styleRWDDWA: 'styleRWDDWA.css',
    },
};

function applyStyle(style: string) {
    const head = document.head;
    const existingStyleLink = document.getElementById('styleLink') as HTMLLinkElement | null;

    if (existingStyleLink) {
        // jesli link stylu istnieje, usun go
        existingStyleLink.remove();
    }

    const newStyleLink = document.createElement('link');
    newStyleLink.rel = 'stylesheet';
    newStyleLink.href = appState.styles[style];
    newStyleLink.id = 'styleLink';

    head.appendChild(newStyleLink);

    appState.currentStyle = style;
}

function switchStyle() {
    const button = document.getElementById('styleSwitchButton');

    if (button) {
        button.addEventListener('click', () => {
            const newStyle = appState.currentStyle === 'styleRWD.css' ? 'styleRWDDWA' : 'styleRWD';
            applyStyle(newStyle);
        });
    }
}

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initial style application
    applyStyle(appState.currentStyle);

    // Call the function to set up the style switch
    switchStyle();
});
