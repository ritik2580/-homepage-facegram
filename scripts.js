document.addEventListener('DOMContentLoaded', () => {
    // Post Like Button Interactivity
    const likeButtons = document.querySelectorAll('.post-actions button');
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked');
        });
    });

    // Logo Animation
    const logo = document.querySelector('.animated-logo');
    logo.addEventListener('mouseenter', () => {
        logo.style.color = '#ff8a00';
    });
    logo.addEventListener('mouseleave', () => {
        logo.style.color = '#ffffff';
    });

    // Dynamic Comments Feature
    const commentButtons = document.querySelectorAll('.post-actions .comment');
    commentButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const post = event.target.closest('.post');
            const commentBox = post.querySelector('.comments-section');
            commentBox.style.display = commentBox.style.display === 'block' ? 'none' : 'block';
        });
    });

    const commentForms = document.querySelectorAll('.add-comment-form');
    commentForms.forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const input = form.querySelector('input');
            const post = form.closest('.post');
            const commentList = post.querySelector('.comments-list');
            const newComment = document.createElement('li');
            newComment.innerText = input.value;
            commentList.appendChild(newComment);
            input.value = '';
        });
    });

    // Smooth Scrolling
    const scrollToSections = document.querySelectorAll('.navbar a');
    scrollToSections.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector(event.target.hash).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Notification Popup
    const notificationIcon = document.querySelector('.fa-bell');
    const notificationBox = document.createElement('div');
    notificationBox.classList.add('notification-box');
    notificationBox.innerHTML = '<p>You have a new notification!</p>';
    document.body.appendChild(notificationBox);
    notificationIcon.addEventListener('click', () => {
        notificationBox.classList.toggle('visible');
    });

    // Friend Request Button Interactivity
    const friendRequestButtons = document.querySelectorAll('.friend-request-btn');
    friendRequestButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.innerText = button.innerText === 'Add Friend' ? 'Friend Request Sent' : 'Add Friend';
            button.classList.toggle('request-sent');
        });
    });

    // Scroll-to-Top Button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.classList.add('scroll-to-top-btn');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollToTopBtn);
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Dark Mode Toggle
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});
// Profile Picture Upload
const profilePicInput = document.querySelector('#uploadProfilePic');
const profilePic = document.querySelector('.profile-pic');

profilePicInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profilePic.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});
// JavaScript to handle Friend Request Button
const friendRequestButtons = document.querySelectorAll('.friend-request-btn');

friendRequestButtons.forEach(button => {
   button.addEventListener('click', (event) => {
       const userName = event.target.getAttribute('data-user');
       event.target.innerHTML = 'Request Sent';
       event.target.disabled = true;
       alert(`Friend request sent to ${userName}!`);
   });
});
const reactionButtons = document.querySelectorAll('.reaction-btn');

reactionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const reactionType = button.classList[1].split('-')[0]; // 'like', 'love', etc.
        alert(`You reacted with ${reactionType}!`);
        // You can expand this to store the reaction in a database.
    });
});
window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        loadMorePosts();
    }
});

function loadMorePosts() {
    // This function would normally fetch new posts from the server
    const newPost = document.createElement('div');
    newPost.classList.add('post');
    newPost.innerHTML = '<p>New post loaded!</p>';
    document.getElementById('posts').appendChild(newPost);
}
const emojiBtn = document.querySelector('.emoji-btn');
const commentInput = document.querySelector('.comment-input');

emojiBtn.addEventListener('click', () => {
    const emoji = '😀';  // You can expand this to show a full emoji picker
    commentInput.value += emoji;
});
