const dropArea = document.querySelector('.drop-area');
const dragText = dropArea.querySelector('h2');
const button = dropArea.querySelector('button');
const input = dropArea.querySelector('#input-file');
let files;

button.addEventListener('click', (e) => {
    input.click();
});

input.addEventListener('change', (e) => {
    files = input.files;
    dropArea.classList.add('active');
    showFiles(files);
    dropArea.classList.remove('active')
});

dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.classList.add('active');
    dragText.textContent = "Drag your files"
});

dropArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropArea.classList.remove('active');
    dragText.textContent = "Drag and drop your files here"
});

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    files = e.dataTransfer.files;
    showFiles(files)
    dropArea.classList.remove('active');
    dragText.textContent = "Drag and drop your files here"
});

function showFiles(files) {
    if (files.length === undefined) {
        processFile(files);
    } else {
        for (const file of files) {
            processFile(file)
        }
    }
}

/**
 * Processes the given file by validating its type, reading its content, 
 * and displaying a preview of the image. If the file type is valid, 
 * it also initiates the upload process.
 *
 * @param {File} file - The file to be processed.
 */
function processFile(file) {
    const documentType = file.type;
    const validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];

    if (validExtensions.includes(documentType)) {
        const fileReader = new FileReader();
        const id = `file-${Math.random().toString(32).substring(7)}`;

        fileReader.addEventListener('load', (e) => {
            const fileUrl = fileReader.result;
            const image = `
                <div id="${id}" class="file-container">
                    <img src="${fileUrl}" alt="${file.name}" width="50px">
                    <div class="status" style="border:none">
                        <span>${file.name}</span>
                        <span class="status-text">Loading...</span>
                    </div>
                </div>
            `;

            document.querySelector('#preview').innerHTML += image;
        });

        fileReader.readAsDataURL(file);
        uploadFile(file, id);
    } else {
        alert(`It's not a valid file extension`)
    }
}

/**
 * Uploads a file to the server.
 *
 * @param {File} file - The file to be uploaded.
 * @param {string} id - The ID of the element to update the status text.
 * @returns {Promise<void>} A promise that resolves when the upload is complete.
 */
async function uploadFile(file, id) {
    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData,
        });

        const responseText = await response.text();
        console.log(responseText);

        document.querySelector(`#${id} .status-text`).innerHTML = `<span class="success">Successfully uploaded</span>`;

    } catch (error) {
        document.querySelector(`#${id} .status-text`).innerHTML = `<span class="failure">There was a problem</span>`;
    }
}