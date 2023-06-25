$(document).ready(function () {
    var translations = {};
    var originalContent = $('main').html();

    // Load translations based on selected language:)
     function loadTranslations(language) {
        if (language === 'en') {
            // Restore the original English content from the <main> element
            $('main').html(originalContent);
            // or $('body').html(originalContent);
        } else {
            var jsonFile = language + '.json';
            $.getJSON(jsonFile, function (data) {
                translations = data;
                Object.keys(translations).forEach(function (key) {
                    $('#' + key).text(translations[key]);
                });
            });
        }
    }

    // Switch language
    function switchLanguage(language) {
        loadTranslations(language);
    }

    // Language switching buttons
    $('.langBtn').click(function () {
        var language = $(this).data('language');
        switchLanguage(language);
    });

    // Load default language (English)
    switchLanguage('en');
});