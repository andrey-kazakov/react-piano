import MidiNumbers from './MidiNumbers';

function createKeyboardShortcuts({ firstNote, lastNote, keyboardConfig }) {
  let currentMidiNumber = firstNote;
  let naturalKeyIndex = 0;
  let keyboardShortcuts = [];

  while (
    // There are still keys to be assigned
    naturalKeyIndex < keyboardConfig.length &&
    // Note to be assigned does not surpass range
    currentMidiNumber <= lastNote
  ) {
    const key = keyboardConfig[naturalKeyIndex];
    const { isAccidental } = MidiNumbers.getAttributes(currentMidiNumber);
    if (isAccidental) {
      keyboardShortcuts.push({
        key: key.key.flat,
        code: key.code.flat,
        midiNumber: currentMidiNumber,
      });
    } else {
      keyboardShortcuts.push({
        key: key.key.natural,
        code: key.code.natural,
        midiNumber: currentMidiNumber,
      });
      naturalKeyIndex += 1;
    }
    currentMidiNumber += 1;
  }
  return keyboardShortcuts;
}

export default {
  create: createKeyboardShortcuts,
  // Preset configurations
  BOTTOM_ROW: [
    { key: { natural: 'z', flat: 'a' }, code: { natural: 'KeyZ', flat: 'KeyA' } },
    { key: { natural: 'x', flat: 's' }, code: { natural: 'KeyX', flat: 'KeyS' } },
    { key: { natural: 'c', flat: 'd' }, code: { natural: 'KeyC', flat: 'KeyD' } },
    { key: { natural: 'v', flat: 'f' }, code: { natural: 'KeyV', flat: 'KeyF' } },
    { key: { natural: 'b', flat: 'g' }, code: { natural: 'KeyB', flat: 'KeyG' } },
    { key: { natural: 'n', flat: 'h' }, code: { natural: 'KeyN', flat: 'KeyH' } },
    { key: { natural: 'm', flat: 'j' }, code: { natural: 'KeyM', flat: 'KeyJ' } },
    { key: { natural: ',', flat: 'k' }, code: { natural: 'Comma', flat: 'KeyK' } },
    { key: { natural: '.', flat: 'l' }, code: { natural: 'Period', flat: 'KeyL' } },
    { key: { natural: '/', flat: ';' }, code: { natural: 'Slash', flat: 'Semicolon' } },
  ],
  HOME_ROW: [
    { key: { natural: 'a', flat: 'q' }, code: { natural: 'KeyA', flat: 'KeyQ' } },
    { key: { natural: 's', flat: 'w' }, code: { natural: 'KeyS', flat: 'KeyW' } },
    { key: { natural: 'd', flat: 'e' }, code: { natural: 'KeyD', flat: 'KeyE' } },
    { key: { natural: 'f', flat: 'r' }, code: { natural: 'KeyF', flat: 'KeyR' } },
    { key: { natural: 'g', flat: 't' }, code: { natural: 'KeyG', flat: 'KeyT' } },
    { key: { natural: 'h', flat: 'y' }, code: { natural: 'KeyH', flat: 'KeyY' } },
    { key: { natural: 'j', flat: 'u' }, code: { natural: 'KeyJ', flat: 'KeyU' } },
    { key: { natural: 'k', flat: 'i' }, code: { natural: 'KeyK', flat: 'KeyI' } },
    { key: { natural: 'l', flat: 'o' }, code: { natural: 'KeyL', flat: 'KeyO' } },
    { key: { natural: ';', flat: 'p' }, code: { natural: 'Semicolon', flat: 'KeyP' } },
    { key: { natural: "'", flat: '[' }, code: { natural: 'Quote', flat: 'BracketLeft' } },
  ],
  QWERTY_ROW: [
    { key: { natural: 'q', flat: '1' }, code: { natural: 'KeyQ', flat: 'Digit1' } },
    { key: { natural: 'w', flat: '2' }, code: { natural: 'KeyW', flat: 'Digit2' } },
    { key: { natural: 'e', flat: '3' }, code: { natural: 'KeyE', flat: 'Digit3' } },
    { key: { natural: 'r', flat: '4' }, code: { natural: 'KeyR', flat: 'Digit4' } },
    { key: { natural: 't', flat: '5' }, code: { natural: 'KeyT', flat: 'Digit5' } },
    { key: { natural: 'y', flat: '6' }, code: { natural: 'KeyY', flat: 'Digit6' } },
    { key: { natural: 'u', flat: '7' }, code: { natural: 'KeyU', flat: 'Digit7' } },
    { key: { natural: 'i', flat: '8' }, code: { natural: 'KeyI', flat: 'Digit8' } },
    { key: { natural: 'o', flat: '9' }, code: { natural: 'KeyO', flat: 'Digit9' } },
    { key: { natural: 'p', flat: '0' }, code: { natural: 'KeyP', flat: 'Digit0' } },
    { key: { natural: '[', flat: '-' }, code: { natural: 'BracketLeft', flat: 'Minus' } },
  ],
};
