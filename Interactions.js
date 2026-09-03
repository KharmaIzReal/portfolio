// =========================================================
// 1. DOM INTERACTION: Nav toggle (hamburger menu)
// Present on every page's header, so no page-guard needed.
// =========================================================
const navToggle = document.querySelector('#navToggle');
const navMenu = document.querySelector('#navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen);
    });
}

// =========================================================
// 2. FORM VALIDATION (only present on about.html)
// =========================================================
const form = document.querySelector('#contactForm');

if (form) {
    const fields = ['name', 'email', 'message'];

    const showError = (field, message) => {
        const errorEl = document.querySelector(`#${field}Error`);
        const input = document.querySelector(`#${field}`);
        if (errorEl) errorEl.textContent = message;
        if (input) input.setAttribute('aria-invalid', 'true');
    };

    const clearError = (field) => {
        const errorEl = document.querySelector(`#${field}Error`);
        const input = document.querySelector(`#${field}`);
        if (errorEl) errorEl.textContent = '';
        if (input) input.removeAttribute('aria-invalid');
    };

    const validateField = (field) => {
        const input = document.querySelector(`#${field}`);
        if (!input) return true;
        const value = input.value.trim();

        if (!value) {
            showError(field, `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`);
            return false;
        }

        if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            showError(field, 'Enter a valid email address.');
            return false;
        }

        clearError(field);
        return true;
    };

    // Clear/refresh errors live as the user types (keyboard-friendly, no extra key handlers needed)
    fields.forEach((field) => {
        const input = document.querySelector(`#${field}`);
        if (input) {
            input.addEventListener('input', () => validateField(field));
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const allValid = fields.map(validateField).every(Boolean);
        const status = document.querySelector('#formStatus');

        if (allValid) {
            if (status) status.textContent = 'Message sent successfully!';
            form.reset();
        } else {
            if (status) status.textContent = 'Please fix the errors above.';
            // Move focus to the first invalid field for keyboard/screen-reader users
            const firstInvalid = fields.find((f) => !validateField(f));
            const firstInvalidInput = firstInvalid ? document.querySelector(`#${firstInvalid}`) : null;
            if (firstInvalidInput) firstInvalidInput.focus();
        }
    });
}

// =========================================================
// 3. BONUS: API FETCH (only present on index.html)
// =========================================================
const factEl = document.querySelector('#funFact');

if (factEl) {
    async function loadFunFact() {
        try {
            const res = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');
            if (!res.ok) throw new Error(`Request failed: ${res.status}`);
            const data = await res.json();
            factEl.textContent = data.text;
        } catch (err) {
            factEl.textContent = 'Could not load a fun fact right now. Please try again later.';
            console.error('Fun fact fetch failed:', err);
        }
    }

    loadFunFact();
}
