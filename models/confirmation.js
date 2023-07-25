console.info('confirmation model loaded');

document.addEventListener('alpine:init', () => {
    Alpine.store('payment', {
        name : 'Confirmation Model',
    })
})