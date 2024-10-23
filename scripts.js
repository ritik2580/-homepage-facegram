// Toggle like button between "Like" and "Liked"
document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent.includes('Liked')) {
            button.textContent = '👍 Like';
        } else {
            button.textContent = '❤️ Liked';
        }
        button.style.backgroundColor = button.textContent.includes('Liked') ? '#ff3300' : '#ff6600';
    });
});

// Comment button action
document.querySelectorAll('.comment-btn').forEach(button => {
    button.addEventListener('click', () => {
        const commentBox = prompt('Enter your comment:');
        if (commentBox) {
            alert(`Your comment: "${commentBox}" has been added!`);
        }
    });
});

// Notifications and friend requests dropdowns
document.querySelectorAll('.notifications, .friend-requests').forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
        dropdown.querySelector('.notification-dropdown, .request-dropdown').style.display = 'block';
    });
    dropdown.addEventListener('mouseleave', () => {
        dropdown.querySelector('.notification-dropdown, .request-dropdown').style.display = 'none';
    });
});

// Reels video controls (for better user interaction)
document.querySelectorAll('video').forEach(video => {
    video.addEventListener('play', () => {
        console.log('Reel is playing');
    });
    video.addEventListener('pause', () => {
        console.log('Reel is paused');
    });
});

// Profile and privacy button alerts for interaction
document.querySelector('.profile').addEventListener('click', () => {
    alert('Profile settings will be available soon.');
});

document.querySelector('.privacy').addEventListener('click', () => {
    alert('Privacy settings will be available soon.');
});

document.querySelector('.logout').addEventListener('click', () => {
    alert('You have successfully logged out!');
});
// Function to trigger animation on page load
window.addEventListener('DOMContentLoaded', () => {
    const titleSpans = document.querySelectorAll('.animated-title span');
    titleSpans.forEach((span, index) => {
        setTimeout(() => {
            span.style.animation = 'jump 01s infinite';
        }, index * 100); // Staggering the start of the animation
    });
});
