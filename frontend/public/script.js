const form = document.querySelector("#add-category");
form.addEventListener("submit", function(event){
    event.preventDefault();
    const product = {
        name : document.querySelector("#name").value,
        category : document.querySelector("#category").value,
        price : parseInt(document.querySelector("#price").value)
    };

    const formData = new formData();
    formData.append("fileName", document.querySelector("#file-name").value)
    formData.append("file", document.querySelector("#file").files[0]) // files array-t ad vissza, még ha egy elem is található benne

    fetch("/upload", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product),
    });

    fetch("/upload-image", {
        method : 'POST',
        body : formData
    });
});