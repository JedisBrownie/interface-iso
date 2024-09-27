
export function getDataFromUrl(url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let response = JSON.parse(xhr.responseText);
                    resolve(response);
                } else {
                    reject(new Error("Échec de la requête. Statut : " + xhr.status));
                }
            }
        };
        xhr.send();
    });
}
