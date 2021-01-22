function extract(content) {
    let text = document.getElementById(content).textContent;
    let match = [...text.matchAll(/\((.+?)\)/gm)].map(m => m[1]);
    
    return match.join('; ');
}