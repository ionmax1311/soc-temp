// Game Page Script

document.addEventListener('DOMContentLoaded', function() {
    
    // Hide loading screen when iframe loads
    const gameFrame = document.getElementById('gameFrame');
    const gameLoading = document.getElementById('gameLoading');
    
    if (gameFrame && gameLoading) {
        gameFrame.addEventListener('load', function() {
            setTimeout(() => {
                gameLoading.classList.add('hidden');
            }, 1000);
        });
        
        // Fallback: hide after 5 seconds if load event doesn't fire
        setTimeout(() => {
            gameLoading.classList.add('hidden');
        }, 5000);
    }
    
    // Full screen toggle (optional)
    const gameWrapper = document.querySelector('.game-wrapper');
    
    if (gameWrapper) {
        // Double-click to attempt fullscreen
        gameWrapper.addEventListener('dblclick', function() {
            if (gameFrame.requestFullscreen) {
                gameFrame.requestFullscreen();
            } else if (gameFrame.webkitRequestFullscreen) {
                gameFrame.webkitRequestFullscreen();
            } else if (gameFrame.msRequestFullscreen) {
                gameFrame.msRequestFullscreen();
            }
        });
    }
    
    // Log game page load
    console.log('🍩 Rings of Frosting loaded!');
    console.log('🎮 Game is ready to play - 100% free, no real money');
    
});
