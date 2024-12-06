const btnSearch = document.getElementById('btnSearch');

function searchCondition() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultDiv = document.getElementById('resultDiv');
    resultDiv.innerHTML = '';

    fetch('travel_api.json')
        .then(response => response.json())
        .then(data => {
        const country = data.countries.find(item => item.name.toLowerCase() === input);

            if (country) {
                array = country.cities
                array.forEach(city => {
                    resultDiv.innerHTML += `<div class="custom-card">`;
                    resultDiv.innerHTML += `<img src="${city.imageUrl}" alt="image" class="w-full h-40 object-cover">`;
                    resultDiv.innerHTML += `<div class="p-4">`;
                    resultDiv.innerHTML += `<h3 class="text-xl font-bold mb-2">${city.name}</h3></p>`;
                    resultDiv.innerHTML += `<p class="text-gray-600 mb-3 text-sm">${city.description}</p>`;
                    resultDiv.innerHTML += `<a href="#" class="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition">Visit Service</a>">`;
                    resultDiv.innerHTML += "</div></div>"
                });


            } else {
                resultDiv.innerHTML = 'Country not found.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}

btnSearch.addEventListener('click', searchCondition);
