function sortArray(input) {
    let twoCriteriaSort = (cur, next) =>
        cur.length - next.length || cur.localeCompare(next);
    input.sort(twoCriteriaSort);
    return input.join('\n');
}

console.log(sortArray(["Isacc", "Theodor", "Jack", "Harrison", "George"]
    ));