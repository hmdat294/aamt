function CustomUploadAdapter(loader) {
    return {
        upload: async () => {
            const file = await loader.file;
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = () => resolve({ default: reader.result, });
                reader.readAsDataURL(file);
            });
        },
    };
}

export default function CustomUploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => CustomUploadAdapter(loader);
}