function home() {
    if (window.location.href.includes('/shorts/')) {
        window.location.href = 'https://youtube.com'
    }
}

window.addEventListener('yt-navigate-start', home);
