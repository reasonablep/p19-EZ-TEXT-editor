// Creates logic for installation of app

// Listen for click of the install button

const butInstall = document.getElementById('buttonInstall');

// Handle the 'beforeinstallprompt' event 

window.addEventListener('beforeinstallprompt', (event) => {


    // Store the event object for later use

    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);

});


// 

butInstall.addEventListener('click', async () => {
    const choiceResult = window.deferredPrompt;

    if (!choiceResult) {
        console.log('No choice made')
        return;
    }

    // Display installation prompt

    choiceResult.prompt()
    window.deferredPrompt = null;
    console.log('User dismissed install prompt');

butInstall.classList.toggle('hidden', true);

});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
    console.log('JATE installed successfully')
});
