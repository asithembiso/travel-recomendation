const btnSearch = document.getElementById('btnSearch');

function searchCondition() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultDiv = document.getElementById('resultDiv');
    resultDiv.innerHTML = '';

    fetch('travel_api.json')
        .then(response => response.json())
        .then(data => {
        const condition = data.conditions.find(item => item.name.toLowerCase() === input);

            if (condition) {
                const symptoms = condition.symptoms.join(', ');
                const prevention = condition.prevention.join(', ');
                const treatment = condition.treatment;

                resultDiv.innerHTML += `<div class="custom-card">`;
                resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="image" class="w-full h-40 object-cover">`;

                resultDiv.innerHTML += `<div class="p-4">`;
                resultDiv.innerHTML += `<h3 class="text-xl font-bold mb-2">Service One</h3></p>`;
                resultDiv.innerHTML += `<p class="text-gray-600 mb-3 text-sm">Innovative solutions for your business needs.</p>`;
                resultDiv.innerHTML += `<a href="#" class="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition">Visit Service</a>">`;
                resultDiv.innerHTML += "</div></div>"

            } else {
                resultDiv.innerHTML = 'Condition not found.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}

btnSearch.addEventListener('click', searchCondition);
