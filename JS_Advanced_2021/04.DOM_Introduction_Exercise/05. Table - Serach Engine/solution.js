function solve() {
   let dataTr = Array.from(document.querySelectorAll('tbody > tr'));
   let searchField = document.querySelector("#searchField");
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   function onClick() {
      let regex = new RegExp(searchField.value, 'gim');
        dataTr.map(e => {
            e.classList.remove('select');
            if (e.innerText.match(regex) !== null) {
                e.className = 'select';
            }
        });
        searchField.value = '';
      
   }
}