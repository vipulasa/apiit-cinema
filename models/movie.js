console.info('movie model loaded');

document.addEventListener('alpine:init', () => {
    Alpine.store('movies', {
        name : 'Movie Model',
        movies: [
            'test'  
        ],
    })
})