function getArticleGenerator(articles) {
    let arr = articles;
    function showNext() {
        if (arr.length > 0) {
        let p = document.createElement('p');
        p.textContent = arr.shift();
        document.getElementById('content').appendChild(p);
        
      }
        
    }
    return showNext;

}
