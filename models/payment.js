console.info('payment model loaded');

document.addEventListener('alpine:init', () => {
    Alpine.store('payment', {
        name : 'Payment Model',
    })
})