const quotes = [
  {
    quote: "You must be the change you want to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "The best way to find yourself is to lose yourself in the service of others.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "In a gentle way, you can shake the world.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "Don't count the days, make the days count.",
    author: "Muhammad Ali"
  },
  {
    quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
    author: "Confucius"
  },
  {
    quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    author: "Steve Jobs"
  },
  {
    quote: "The world is the great gymnasium where we come to make ourselves strong.",
    author: "Swami Vivekananda"
  },
  {
    quote: "Arise, awake, and stop not until the goal is reached.",
    author: "Swami Vivekananda"
  },
  {
    quote: "The power of imagination makes us infinite.",
    author: "John Muir"
  },
  {
    quote: "The harder the conflict, the greater the triumph.",
    author: "George Washington"
  },
  {
    quote: "What we think, we become.",
    author: "Buddha"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "Faith is the bird that feels the light when the dawn is still dark.",
    author: "Rabindranath Tagore"
  },
  {
    quote: "You can't cross the sea merely by standing and staring at the water.",
    author: "Rabindranath Tagore"
  },
  {
    quote: "Where the mind is without fear and the head is held high, where knowledge is free.",
    author: "Rabindranath Tagore"
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  },
  {
    quote: "The power of imagination makes us infinite.",
    author: "John Muir"
  },
  {
    quote: "It is health that is real wealth and not pieces of gold and silver.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    quote: "The only person you should try to be better than is the person you were yesterday.",
    author: "Anonymous"
  },
  {
    quote: "A dream you dream alone is only a dream. A dream you dream together is reality.",
    author: "John Lennon"
  },
  {
    quote: "Our life is what our thoughts make it.",
    author: "Marcus Aurelius"
  },
  {
    quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "Happiness is not something ready-made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    quote: "The best preparation for tomorrow is doing your best today.",
    author: "H. Jackson Brown Jr."
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill"
  },
  {
    quote: "In every walk with nature one receives far more than he seeks.",
    author: "John Muir"
  },
  {
    quote: "A man is but the product of his thoughts; what he thinks, he becomes.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "To succeed in life, you need two things: ignorance and confidence.",
    author: "Mark Twain"
  },
  {
    quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer"
  },
  {
    quote: "The only thing standing between you and your dream is the will to try and the belief that it is actually possible.",
    author: "Joel Brown"
  },
  {
    quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    author: "Buddha"
  },
  {
    quote: "You cannot change what you are, only what you do.",
    author: "Philip Pullman"
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    quote: "Happiness is not something ready-made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    quote: "The harder the conflict, the greater the triumph.",
    author: "George Washington"
  },
  {
    quote: "What we think, we become.",
    author: "Buddha"
  },
  {
    quote: "In a gentle way, you can shake the world.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
    author: "Confucius"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "A dream you dream alone is only a dream. A dream you dream together is reality.",
    author: "John Lennon"
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    quote: "The world is the great gymnasium where we come to make ourselves strong.",
    author: "Swami Vivekananda"
  },
  {
    quote: "Arise, awake, and stop not until the goal is reached.",
    author: "Swami Vivekananda"
  },
  {
    quote: "Faith is the bird that feels the light when the dawn is still dark.",
    author: "Rabindranath Tagore"
  },
  {
    quote: "You can't cross the sea merely by standing and staring at the water.",
    author: "Rabindranath Tagore"
  },
  {
    quote: "Where the mind is without fear and the head is held high, where knowledge is free.",
    author: "Rabindranath Tagore"
  },
  {
    quote: "It is health that is real wealth and not pieces of gold and silver.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    quote: "The only person you should try to be better than is the person you were yesterday.",
    author: "Anonymous"
  },
  {
    quote: "A dream you dream alone is only a dream. A dream you dream together is reality.",
    author: "John Lennon"
  },
  {
    quote: "Our life is what our thoughts make it.",
    author: "Marcus Aurelius"
  },
  {
    quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "Happiness is not something ready-made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    quote: "The best preparation for tomorrow is doing your best today.",
    author: "H. Jackson Brown Jr."
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill"
  },
  {
    quote: "In every walk with nature one receives far more than he seeks.",
    author: "John Muir"
  },
  {
    quote: "A man is but the product of his thoughts; what he thinks, he becomes.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "To succeed in life, you need two things: ignorance and confidence.",
    author: "Mark Twain"
  },
  {
    quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer"
  },
  {
    quote: "The only thing standing between you and your dream is the will to try and the belief that it is actually possible.",
    author: "Joel Brown"
  },
  {
    quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    author: "Buddha"
  },
  {
    quote: "You cannot change what you are, only what you do.",
    author: "Philip Pullman"
  }
  // Add more quotes here...
];

