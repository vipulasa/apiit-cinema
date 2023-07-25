console.info('tickets model loaded');

document.addEventListener('alpine:init', () => {
    Alpine.store('ticket', {
        name : 'Ticket Model',
    })
})