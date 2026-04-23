const code = `
    const targetSpeed = 2.0;

    function setYtSpeed() {
        const player = document.getElementById('movie_player');
        if (player && typeof player.setPlaybackRate === 'function') {
            if (player.getPlaybackRate() !== targetSpeed) {
                player.setPlaybackRate(targetSpeed);
            }
        } else {
            const video = document.querySelector('video');
            if (video && video.playbackRate !== targetSpeed) {
                video.playbackRate = targetSpeed;
            }
        }
    }

    window.addEventListener('yt-navigate-finish', () => {
        setTimeout(setYtSpeed, 100);
        setTimeout(setYtSpeed, 500);
        setTimeout(setYtSpeed, 1000);
    });

    document.addEventListener('play', (e) => {
        if (e.target.tagName === 'VIDEO') {
            setTimeout(setYtSpeed, 100);
        }
    }, true);

    setYtSpeed();
`;

const script = document.createElement('script');
script.textContent = code;
document.documentElement.appendChild(script);
script.remove();
