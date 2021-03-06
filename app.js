function showCountries() {

let xhr = new XMLHttpRequest()


xhr.open('GET','https://restcountries.com/v3.1/all', true)

xhr.onload = function() {
    if(xhr.status == 200) {
        let countries = JSON.parse(this.response)
        countries.forEach(country => {
            const divy = document.createElement('div')
            const countryCard = document.createElement('h1')
            const countryCardLine = document.createElement('div')
            const countryCardImage = document.createElement('img')

            countryCard.innerHTML = country.name.common
            countryCardImage.src = country.flags.png

            divy.appendChild(countryCard)
            divy.appendChild(countryCardLine)
            divy.appendChild(countryCardImage)
            
            document.getElementById('feed').appendChild(divy)
         
        });
    }
}

xhr.send()

}