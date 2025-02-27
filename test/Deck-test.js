const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
  let deck;

  beforeEach(() => {
    deck = new Deck();
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should instantiate a new Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be initialized with an array of card objects', () => {
    const card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    const card2 = new Card(
      14,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
    );
    const card3 = new Card(
      12,
      "What is Travis's middle name?",
      ['Lex', 'William', 'Fitzgerald'],
      'Fitzgerald'
    );

    const deck = new Deck([card1, card2, card3]);

    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should be able to count the number of cards in the deck', () => {
    const card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    const card2 = new Card(
      14,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
    );
    const card3 = new Card(
      12,
      "What is Travis's middle name?",
      ['Lex', 'William', 'Fitzgerald'],
      'Fitzgerald'
    );
    
    const deck = new Deck([card1, card2, card3]);
    const count = deck.countCards();

    expect(count).to.equal(3);
  });
});
