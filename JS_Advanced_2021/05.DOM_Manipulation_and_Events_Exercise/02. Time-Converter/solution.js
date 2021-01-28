function attachEventsListeners() {

    document.getElementById('daysBtn').addEventListener('click', () => {
        document.getElementById('hours').value = Number(document.getElementById('days').value) * 24;
        document.getElementById('minutes').value = Number(document.getElementById('hours').value) * 60;
        document.getElementById('seconds').value = Number(document.getElementById('minutes').value) * 60;
    });

    document.getElementById('hoursBtn').addEventListener('click', () => {
        document.getElementById('days').value = Number(document.getElementById('hours').value) / 24;
        document.getElementById('minutes').value = Number(document.getElementById('hours').value) * 60;
        document.getElementById('seconds').value = Number(document.getElementById('minutes').value) * 60;
    });
    document.getElementById('minutesBtn').addEventListener('click', () => {
        document.getElementById('days').value = (Number(document.getElementById('minutes').value) / 60) / 24;
        document.getElementById('hours').value = (Number(document.getElementById('minutes').value) / 60);
        document.getElementById('seconds').value = Number(document.getElementById('minutes').value) * 60;
    })
    document.getElementById('secondsBtn').addEventListener('click', () => {
        document.getElementById('minutes').value = Number(document.getElementById('seconds').value) / 60;
        document.getElementById('hours').value = Number(document.getElementById('minutes').value) / 60;
        document.getElementById('days').value = Number(document.getElementById('hours').value) / 24;
    });


}