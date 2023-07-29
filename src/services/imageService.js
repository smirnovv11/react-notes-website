export const ImageUploader = {
    uploadImage(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader(); // Создаем объект FileReader

            // Определяем обработчик события при загрузке картинки
            reader.onload = function(e) {
                const imageURL = e.target.result; // Получаем URL изображения
                resolve(imageURL);
            };

            // Определяем обработчик ошибки чтения файла
            reader.onerror = function(e) {
                reject(e);
            };

            // Читаем данные файла как Data URL
            reader.readAsDataURL(file);
        });
    }
}