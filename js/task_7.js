function getBase64FromUrl(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                return response.blob();
            })
            .then(blob => {

                const reader = new FileReader();
                reader.readAsDataURL(blob); 
                reader.onloadend = () => {
                    resolve(reader.result);
                };
                reader.onerror = error => {
                    reject(error);
                };
            })
            .catch(error => {
                reject(error);
            });
    });
}
