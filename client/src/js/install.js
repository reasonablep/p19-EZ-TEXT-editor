const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {
 event.preventDefault();
 
 // Update UI so user knows app is installable

 butInstall.style.visibility = 'visible';
 
});

butInstall.addEventListener('click', async () => {
    const promptEvent = await window.deferredPrompt.prompt();

    const choiceResult = await promptEvent.userChoice;

if (choiceResult.outcome === 'accepted') {
    console.log('User accepted install prompt');
} else {
    console.log('User dismissed install prompt');
}

});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
    console.log('JATE installed successfully')
});
