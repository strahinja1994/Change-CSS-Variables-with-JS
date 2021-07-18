const inputs = document.querySelectorAll('.controls input');

function handle_update() {
    console.log(this.value);
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => {
    input.addEventListener('change', handle_update);
    input.addEventListener('mousemove', handle_update);
});