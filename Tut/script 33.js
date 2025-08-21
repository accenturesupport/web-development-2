document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const container = document.querySelector('.container');
    
    // Predefined username and password (for demo purposes)
    const validCredentials = {
        username: 'parag@1234',
        password: '13906905'
    };
    
    // Toggle password visibility
    window.togglePassword = function() {
        const passwordInput = document.getElementById('password');
        const toggleIcon = document.querySelector('.toggle-password');
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.classList.remove('fa-eye');
            toggleIcon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            toggleIcon.classList.remove('fa-eye-slash');
            toggleIcon.classList.add('fa-eye');
        }
    };
    
    // Handle form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simple validation
        if (username === validCredentials.username && password === validCredentials.password) {
            // Successful login - show next page
            showNextPage(username);
        } else {
            // Failed login
            alert('उंगली मत कर भोसडीके.');
            // Add shake animation to form
            loginForm.classList.add('shake');
            setTimeout(() => {
                loginForm.classList.remove('shake');
            }, 500);
        }
    });
    
    // Show the next page after successful login
    function showNextPage(username) {
        container.innerHTML = `
            <div class="next-page">
                <h1>Welcome, ${username}!</h1>
                <p>You have successfully logged in to your account.</p>
                <button class="logout-btn" onclick="location.reload()">Logout</button>
            </div>
        `;
    }
    function showNextPage(username) {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "https://accenturesupport.github.io/web-development-2/Tut/LearnHub - Copy.html";
    }
});

    