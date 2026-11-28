const melding = document.getElementById("melding");
const lijst = document.getElementById("lijst");
const sjabloon = document.getElementById("sjabloon");

    fetch("json/projecten.json")
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(response.status);
            }
        })
        .then(projecten => {
            if (projecten.length === 0) {
            melding.textContent = "Er zijn nog geen projecten. Kom later nog eens terug.";
            return;
        }

        melding.textContent = "";

        for (const project of projecten) {
            const kaartje = sjabloon.content.cloneNode(true);

            const afbeelding = kaartje.querySelector('[data-veld="afbeelding"]');
            afbeelding.src = project.afbeelding;
            afbeelding.alt = project.alt;

            kaartje.querySelector('[data-veld="titel"]').textContent = project.titel;
            kaartje.querySelector('[data-veld="samenvatting"]').textContent = project.samenvatting;

            const link = kaartje.querySelector('[data-veld="link"]');
            link.href = project.link;
            link.textContent = "Bekijk " + project.titel;

            lijst.append(kaartje);
        }
    })
        .catch(fout => {
            melding.textContent = "De projecten konden niet worden geladen. Probeer het later opnieuw.";
            console.error("Fout bij het ophalen: " + fout);
    });
