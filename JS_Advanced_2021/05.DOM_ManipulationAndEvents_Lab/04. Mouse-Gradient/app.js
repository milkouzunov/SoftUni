function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', onMove);
    let result = document.getElementById('result');
    
   function onMove (ev) {
        let percent = Math.floor(ev.offsetX / ev.target.clientWidth * 100);
        result.textContent = `${percent}%`;
   }
}