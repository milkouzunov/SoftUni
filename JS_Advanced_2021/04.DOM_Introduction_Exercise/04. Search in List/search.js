function search() {
   let towns = [...document.querySelectorAll('#towns li')].map(el => el.textContent);
   let input = document.getElementById('searchText').value;
   let searchTowns = towns.filter(town => town.includes(input));
   document.getElementById('result').textContent = `${searchTowns.length} matches found`;
   [...document.querySelectorAll('#towns li')].map(el => {
      if(searchTowns.includes(el.textContent)) {
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline';
      }
   })
}
