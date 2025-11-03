const toggle = document.getElementById('modeToggle');
    const body = document.body;

    toggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode', toggle.checked);
    });