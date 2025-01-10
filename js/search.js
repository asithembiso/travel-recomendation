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
                    resultDiv.innerHTML += `<div class="custom-card"><img src="${city.imageUrl}" alt="image" class="w-full h-40 object-cover"><div class="p-4"><h3 class="text-xl font-bold mb-2">${city.name}</h3></p><p class="text-gray-600 mb-3 text-sm">${city.description}</p><a href="#" class="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition">Visit Service</a></div></div>`;
                });
            } else {
                if (input === 'beach' || input === 'beaches') {
                    array = data.beaches
                    array.forEach(beach => {
                        resultDiv.innerHTML += `<div class="custom-card"><img src="${beach.imageUrl}" alt="image" class="w-full h-40 object-cover"><div class="p-4"><h3 class="text-xl font-bold mb-2">${beach.name}</h3></p><p class="text-gray-600 mb-3 text-sm">${beach.description}</p><a href="#" class="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition">Visit Service</a></div></div>`;
                    });
                }else{
                    if(input === 'temple' || input === 'temples'){
                        array = data.temples
                        array.forEach(temple => {
                            resultDiv.innerHTML += `<div class="custom-card"><img src="${temple.imageUrl}" alt="image" class="w-full h-40 object-cover"><div class="p-4"><h3 class="text-xl font-bold mb-2">${tempel.name}</h3></p><p class="text-gray-600 mb-3 text-sm">${temple.description}</p><a href="#" class="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition">Visit Service</a></div></div>`;
                        });
                    } else {
                        resultDiv.innerHTML = 'No data found.';
                    }
                }
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}

btnSearch.addEventListener('click', searchCondition);
