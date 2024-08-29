const quotes = [
    "The mind is everything. What you think you become.",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "Peace comes from within. Do not seek it without.",
    "The only real failure in life is not to be true to the best one knows.",
    "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
    "Three things cannot be long hidden: the sun, the moon, and the truth.",
    "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
    "It is better to conquer yourself than to win a thousand battles.",
    "Holding onto anger is like drinking poison and expecting the other person to die.",
    "In the end, only three things matter: how much you loved, how gently you lived, and how gracefully you let go of things not meant for you.",
    "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",
    "Pain is certain, suffering is optional.",
    "Hatred does not cease by hatred, but only by love; this is the eternal rule.",
    "The root of suffering is attachment.",
    "Thousands of candles can be lit from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
    "The trouble is, you think you have time.",
    "Better than a thousand hollow words is one word that brings peace."
];

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }
    
    while (true){
    const randomIdx = Math.floor(Math.random() * quotes.length)

    if (usedIndexes.has(randomIdx)) continue

    const quote = quotes[randomIdx]
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx)
    break
    }
}