class CustomFileInput {
    constructor(inputFileId, textoButton = null, textoSpan = null,maxLengthspan=30) {
        this.fileInput = document.getElementById(inputFileId);
        this.textoButton = textoButton;
        this.textoSpan = textoSpan;
        this.maxLength = maxLengthspan;
        this.render();
    }

    render() {
        // Create button element
        this.button = document.createElement('button');
        this.button.type = 'button';
        this.button.className = 'custom-file-button';
        this.button.textContent = this.textoButton || 'Seleccionar archivo';
        this.button.title = "Ningún archivo seleccionado";

        // Create span element for file name
        this.fileNameSpan = document.createElement('span');
        this.fileNameSpan.className = 'file-name';
        this.fileNameSpan.textContent = this.textoSpan || 'No se ha seleccionado ningún archivo';
        this.fileNameSpan.title = "Ningún archivo seleccionado";

        // Insert elements before the existing file input
        this.fileInput.insertAdjacentElement('beforebegin', this.button);
        this.fileInput.insertAdjacentElement('afterend', this.fileNameSpan);

        // Hide the original file input
        this.fileInput.style.display = 'none';

        // Add event listener
        this.fileInput.addEventListener('change', this.handleFileSelect.bind(this));
        this.button.addEventListener('click', this.handleClick.bind(this));
        this.fileNameSpan.addEventListener('click', this.handleClick.bind(this));
    }

    handleFileSelect(event) {
        const file = event.target.files[0];
        if (file) {     
            const maxLength = this.maxLength;
            const truncatedFilename = file.name.length > maxLength ? 
                file.name.substr(0, maxLength / 2) + "..." + file.name.substr(-maxLength / 2) : 
                file.name;
            this.fileNameSpan.textContent = truncatedFilename;
        } else {
            this.fileNameSpan.textContent = this.textoSpan || 'No se ha seleccionado ningún archivo';
        }
    }

    handleClick() {
        this.fileInput.click();
    }
}

