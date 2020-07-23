const Quote = require('./quote')
const mongoose = require('mongoose');
const { exists } = require('./quote');

mongoose.connect('mongodb://localhost/quotes');

  const quoteArray = [
    new Quote({
        "quote": "The reward of the young scientist is the emotional thrill of being the first person in the history of the world to see something or to understand something. Nothing can compare with that experience.",
        "author": "Cecilia Payne-Gaposchkin"
    }),

    new Quote({
        "quote": "What you learn from a life in science is the vastness of our ignorance.",
        "author": "David Eagleman"
    }),

    new Quote({
        "quote": "If I have seen further it is by standing on the shoulders of  Giants.",
        "author": "Issac Newton"
    }),

    new Quote({
        "quote": "If a cluttered desk is a sign of a cluttered mind, of what, then, is an empty desk a sign?",
         "author": "Albert Einstein"
    }),

    new Quote({
        "quote": "Our virtues and our failures are inseparable, like force and matter. When they separate, man is no more.",
        "author": "Nikola Tesla"
    }),

    new Quote({
        "quote": "Every brilliant experiment, like every great work of art, starts with an act of imagination.",
        "author": "Jonah Lehrer"
    }),

    new Quote({
        "quote": "The good thing about science is that it's true whether or not you believe in it.",
        "author": "Neil deGrasse Tyson"
    }),

    new Quote({
        "quote": "Science is not only a disciple of reason but also one of romance and passion.",
        "author": "Stephen Hawking"
    }),

    new Quote({
        "quote": "Science and everyday life cannot and should not be separated.",
        "author": "Rosalind Franklin"
    }),

    new Quote({
        "quote": "All outstanding work, in art as well as in science, results from immense zeal applied to a great idea.",
        "author": "Santiago Ramón y Cajal"
    }),

    new Quote({
        "quote": "Above all, don't fear difficult moments. The best comes from them.",
        "author": "Rita Levi-Montalcini"
    }),

    new Quote({
        "quote": "Research is to see what everybody else has seen, and to think what nobody else has thought.",
        "author": "Albert Szent-Györgyi"
    }),

    new Quote({
        "quote": "If you want to have good ideas, you must have many ideas.","author": "Linus Pauling"
    }),

    new Quote({
        "quote": "We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe. That makes us something very special.",
        "author": "Stephen Hawking"
    }),   

    new Quote({
        "quote": "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.", 
        "author": "Marie Curie"
    }),

    new Quote({
        "quote": "Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world.",
        "author": "Louis Pasteur"
    }),

    new Quote({
        "quote": "When kids look up to great scientists the way they do musicians, actors [and sports figures], civilization will jump to the next level.",
        "author": "Brian Greene"
    }),

    new Quote({
        "quote": "We cannot solve problems with the same thinking we used to create them.",
        "author": "Albert Einstein"
    }),


    new Quote({
        "quote": "I am among those who think that science has great beauty.", 
        "author": "Marie Curie"
    }),

    new Quote({
        "quote": "The more I study, the more insatiable do I feel my genius for it to be.",
        "author": "Ada Lovelace"
    }),
    new Quote({
        "quote": "Your best and wisest refuge from all troubles is in your science.",
        "author": "Ada Lovelace"
    })
  ];

  let done = 0;
  for (let i = 0; i < quoteArray.length; i++) {
    quoteArray[i].save(function(err, result) {
      done++;
      if (done === quoteArray.length) {
        exit();
      }
    });
  }

  function exit() {
    mongoose.disconnect();
  }

// router.post('/', async (req, res) => {
//   const quote = new Quote({
//     quote: req.body.quote,
//     author: req.body.author
//   });

//   try {
//     const newQuote = await quote.save();
//     res.status(201).json(newQuote);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

