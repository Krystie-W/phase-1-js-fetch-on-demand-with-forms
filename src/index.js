const init = () => {
    const inputForm = document.querySelector('form'); 
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('#searchByID');
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
            const resultsSummary = document.querySelector('section#movieDetails p')
            const resultsTitle = document.querySelector('section#movieDetails h4')
                resultsTitle.innerHTML = data.title;
                resultsSummary.innerHTML = data.summary;
        })
    })
}

document.addEventListener('DOMContentLoaded', init);