document.getElementById('language-select').addEventListener('change', function () {
    var selectedLanguage = this.value;
    document.querySelectorAll('[data-en]').forEach(function (element) {
        element.innerHTML = element.getAttribute('data-' + selectedLanguage);
    });
});
