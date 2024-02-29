const form = document.querySelector("form");
const resutlDiv = document.querySelector(".result");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(form.elements[0].value);
    getWordInfo(form.elements[0].value);
});



async function getWordInfo(word) {
    try {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const respose = await fetch(url);
        const data = await respose.json();
        
        // console.log(data);

        let definitions = data[0].meanings[0].definitions[0];

        resutlDiv.innerHTML = `
        <h2><strong>Word : </strong>${word}</h2>
        <p class="partOfSpeech">${data[0].meanings[0].partOfSpeech}</p>
        <p><strong>Meaning : </strong>${definitions.definition}</p>
        <p><strong>Examples : </strong>${definitions.example === undefined ? "Not Found" : definitions.example}</p> 
        <p><strong>Antonyms : </strong></p>
    `

        //<------------  Fetching Antonyms  ---------->
        if (definitions.antonyms.length === 0) {
            resutlDiv.innerHTML += `<p>Record not found</p>`
        } else {
            for (let i = 0; i < definitions.antonyms.length; i++) {
                resutlDiv.innerHTML += `<li>${definitions.antonyms[i]}</li>
                `
            }
        }
        //<------------  Fetching Synonyms  ---------->
        if (definitions.synonyms.length === 0) {
            resutlDiv.innerHTML += `
            <p><strong>Synonyms : </strong></p>
            <p>Record not found</p>
            `
        } else {
            for (let i = 0; i < definitions.synonyms.length; i++) {
                resutlDiv.innerHTML += `
                <p><strong>Synonyms : </strong></p>
                <li>${definitions.synonyms[i]}</li>
                `
            }
        }
        


        //<---------- Adding Read more Button  ---------->
        resutlDiv.innerHTML += `<div><a href="${data[0].sourceUrls}" target = "_blank">Read More </a></div>`

    }
    catch (error) {
        resutlDiv.innerHTML = "Sorry, the word could not be found"
    }
}