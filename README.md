# InputFileComponente
El componente CustomFileInput proporciona una interfaz personalizada para la selección de archivos en formularios HTML. Permite ocultar el elemento de entrada de archivos estándar y reemplazarlo con un botón personalizado y un campo de texto que muestra el nombre del archivo seleccionado.

## Constructor
El constructor de la clase CustomFileInput acepta los siguientes parámetros:

- **inputFileId:** ID del elemento de entrada de archivos en el DOM.
- **textoButton:** (Opcional) Texto para el botón personalizado. Si no se proporciona, se utilizará "Seleccionar archivo" por defecto.
- **textoSpan:** (Opcional) Texto inicial para el campo de texto que muestra el nombre del archivo seleccionado. Si no se proporciona, se utilizará "No se ha seleccionado ningún archivo" por defecto.
- **maxLengthspan:** (Opcional) Longitud máxima del nombre del archivo que se mostrará en el campo de texto. El nombre del archivo se truncará si supera este límite. El valor por defecto es 30.
## Métodos
- **render():** Este método crea los elementos HTML necesarios (botón y campo de texto) y los inserta en el DOM. También oculta el elemento de entrada de archivos estándar y configura los event listeners.
- **handleFileSelect(event):** Este método maneja el evento de selección de archivos. Actualiza el texto del campo de texto para mostrar el nombre del archivo seleccionado, truncándolo si excede la longitud máxima especificada.
- **handleClick():** Este método maneja el evento de clic en el botón o en el campo de texto, activando el clic en el elemento de entrada de archivos oculto.
## Ejemplo de uso:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom File Input Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <input type="file" id="fileInput">
    <script src="customFileInput.js"></script>
    <script>
        // Instanciar CustomFileInput
        const customFileInput = new CustomFileInput('fileInput', 'Seleccionar Archivo', 'Ningún Archivo Seleccionado', 30);
    </script>
</body>
</html>```
