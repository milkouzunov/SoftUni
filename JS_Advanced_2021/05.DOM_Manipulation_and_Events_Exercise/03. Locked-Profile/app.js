function lockedProfile() {
    Array.from(document.getElementsByClassName('profile')).forEach(profile => {
        profile.getElementsByTagName('input')[0].addEventListener('click', () => {
            profile.getElementsByTagName('button')[0].disabled = true;
            
        });

        profile.getElementsByTagName('input')[1].addEventListener('click', () => {
            profile.getElementsByTagName('button')[0].disabled = '';
            profile.getElementsByTagName('button')[0].addEventListener('click', (ev) => {
            if (ev.target.textContent === 'Show more') {
                profile.getElementsByTagName('div')[0].style.display = 'block';
                ev.target.textContent = 'Hide it';
            } else if (ev.target.textContent === 'Hide it') {
                profile.getElementsByTagName('div')[0].style.display = 'none';
                ev.target.textContent = 'Show more';
            }
            })
        });


    });;
    
}