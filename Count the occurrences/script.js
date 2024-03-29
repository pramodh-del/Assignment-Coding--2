function countWordOccurrences(text) {
    const words = text.split(" ");
    const wordCount = new Map();

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (wordCount.has(word)) {
            wordCount.set(word, wordCount.get(word) + 1);
        } else {
            wordCount.set(word, 1);
        }
    }

    return wordCount;
}
