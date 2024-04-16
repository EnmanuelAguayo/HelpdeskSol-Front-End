const tinyRender = (selectorName) => {
    tinymce.init({
        selector: selectorName,
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker markdown',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',

        setup: function(editor) {
            editor.on('change', function (e) {
                document.getElementById('notes').value = editor.getContent(selectorName);
            });
            editor.on('submit', function (e) {
                editor.setContent('');
            });
        }
    });
};