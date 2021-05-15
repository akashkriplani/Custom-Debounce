const debounce = (func, delay) => {
    let debounceTimer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    }
} 

let input = document.getElementById('input');

input.addEventListener('keyup', debounce(function() {
	console.log(input.value);
}, 300));