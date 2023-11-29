function searchCountry() {
    const countryInput = document.getElementById("countryInput").value;

    fetch(`https://disease.sh/v3/covid-19/countries/${countryInput}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("countryName").textContent = data.country;
            document.getElementById("cases").textContent = data.cases.toLocaleString();
            document.getElementById("deaths").textContent = data.deaths.toLocaleString();
            document.getElementById("recovered").textContent = data.recovered.toLocaleString();
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
            alert("No se encontraron datos para ese país. Por favor, verifica el nombre del país e inténtalo de nuevo.");
        });
}