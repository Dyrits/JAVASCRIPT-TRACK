// @ts-check

/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */
export function getItem(cards, position) {
  return cards[position];
}

/**
 * Exchange card with replacementCard at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 * @param {number} replacementCard
 *
 * @returns {number[]} the cards with the change applied
 */
export function setItem(cards, position, replacementCard) {
  cards[position] = replacementCard;
  return cards;
  /* Without mutating the original array, the following would be the correct implementation:
  return cards.map((card, index) => index === position ? replacementCard : card);
   */
}

/**
 * Insert newCard at the end of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards with the newCard applied
 */
export function insertItemAtTop(cards, newCard) {
  // The test expects the new card to be added to the end of the array by mutating the original array~
  cards.push(newCard);
  return cards;
  /* Without mutating the original array, the following would be the correct implementation:
  return [...cards, newCard];
   */
}

/**
 * Remove the card at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItem(cards, position) {
  // The test expects the new card to be removed from the array by mutating the original array~
  cards.splice(position, 1);
  return cards;
  /* Without mutating the original array, the following would be the correct implementation:
  return cards.filter((_, index) => index !== position);
   */
}

/**
 * Remove card from the end of the cards array
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemFromTop(cards) {
  // The test expects the new card to be removed from the end of the array by mutating the original array~
  cards.pop();
  return cards;
  /* Without mutating the original array, the following would be the correct implementation:
  return cards.slice(0, cards.length - 1);
   */
}

/**
 * Insert newCard at beginning of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards including the new card
 */
export function insertItemAtBottom(cards, newCard) {
  // The test expects the new card to be added to the start of the array by mutating the original array~
  cards.unshift(newCard);
  return cards;
  /* Without mutating the original array, the following would be the correct implementation:
  return [newCard, ...cards];
   */
}

/**
 * Remove card from the beginning of the cards
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemAtBottom(cards) {
  // The test expects the new card to be added to the start of the array by mutating the original array~
  cards.shift()
  return cards;
  /* Without mutating the original array, the following would be the correct implementation:
  return cards.slice(1);
   */
}

/**
 * Compare the number of cards with the given stackSize
 *
 * @param {number[]} cards
 * @param {number} stackSize
 *
 * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
 */
export function checkSizeOfStack(cards, stackSize) {
  return cards.length === stackSize;
}
