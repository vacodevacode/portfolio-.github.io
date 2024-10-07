let intro = document.getElementById('intro');
let skill = document.getElementById('skill');
let project = document.getElementById('project');
let contact = document.getElementById('contact');

let aHref = document.querySelectorAll('a');

let active = 'intro';
let zIndex = 2;

aHref.forEach(a => {
    a.addEventListener('click', function(event){
        let tab = a.dataset.tab;

        // Vérifier si l'onglet cliqué est "experience"
        if (tab === 'experience') {
            window.location.href = 'index2.html'; // Rediriger vers une autre page (index2.html par exemple)
            return; // Sortie pour empêcher l'exécution du reste du code
        }

        if(tab !== null && tab !== active){
            let activeOld = document.querySelector('.tab.active');
            if(activeOld) activeOld.classList.remove('active');
            active = tab;

            let tabActive = document.getElementById(active);
            zIndex++;
            tabActive.style.zIndex = zIndex;
            tabActive.style.setProperty('--x', event.clientX + 'px');
            tabActive.style.setProperty('--y', event.clientY + 'px');
            tabActive.classList.add('active');
        }
    });
});
