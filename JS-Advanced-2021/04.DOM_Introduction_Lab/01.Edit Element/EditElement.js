function editElement(ref, match, replacer) {
    const pattern = new RegExp(match,'g');
    ref.innerHTML = ref.innerHTML.replace(pattern, replacer);
}