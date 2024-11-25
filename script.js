document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('error');

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.some(user => user.email === email && user.password === password);

    if (!userExists) {
        errorDiv.textContent = 'Incorrect email or password. Please try again or register.';
    } else {
        errorDiv.textContent = '';
        alert('Login successful');
        window.location.href = 'index.html';
    }
});

document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const registerErrorDiv = document.getElementById('registerError');

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        registerErrorDiv.textContent = 'Please fill out all fields.';
        return;
    }

    if (password !== confirmPassword) {
        registerErrorDiv.textContent = 'Passwords do not match.';
        return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        registerErrorDiv.textContent = 'The email is already registered.';
        return;
    }

    users.push({ firstName, lastName, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    registerErrorDiv.textContent = '';
    alert('Registration successful. You can now log in.');
    window.location.href = 'index.html';
});
