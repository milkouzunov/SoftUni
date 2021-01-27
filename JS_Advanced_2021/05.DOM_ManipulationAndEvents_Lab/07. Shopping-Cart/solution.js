function solve() {
   let output = document.getElementsByTagName('textarea')[0];
   let checkoutBtn = document.getElementsByClassName('checkout')[0];
   let addProductBtns = Array.from(document.getElementsByClassName('add-product'))
   let cart = new Set()
   cart.total = 0;
   let print = [];
   
   addProductBtns.forEach(el => {
      el.addEventListener('click', addProduct)
      function addProduct (ev) {
         
         let productTitle = ev.target.parentNode.parentNode.getElementsByClassName('product-title')[0].textContent;
         let productPrice = Number(ev.target.parentNode.parentNode.getElementsByClassName('product-line-price')[0].textContent);

            cart.add(productTitle); 
            cart.total += productPrice;
         print.push(`Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.`)
         output.textContent = print.join('\n');
         
      }
   });

   checkoutBtn.addEventListener('click', checkout)

   function checkout(ev) {
      let printPr = [];
      for (const pr of cart) {
         printPr.push(pr)
      }
      print.push(`You bought ${printPr.join(', ')} for ${cart.total.toFixed(2)}.`)
      output.textContent = print.join('\n');

      for (const addBtn of addProductBtns) {
         addBtn.disabled = true;
      }
      checkoutBtn.disabled = true;
   }
}