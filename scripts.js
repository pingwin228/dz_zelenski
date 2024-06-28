document.querySelector('.mov').addEventListener('click', function() {
    const languages = document.querySelector('.languages');
    languages.style.display = languages.style.display === 'flex' ? 'none' : 'flex';
});

document.querySelectorAll('.languages .lang').forEach(lang => {
    lang.addEventListener('click', function(event) {
        event.preventDefault();  
        
        const selectedLang = this.getAttribute('href').split('=')[1];  
        
        localStorage.setItem('selectedLanguage', selectedLang);
        location.reload();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const selectedLang = localStorage.getItem('selectedLanguage');
    if (selectedLang) {
    }
});
