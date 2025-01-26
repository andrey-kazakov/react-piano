import MidiNumbers from './MidiNumbers';

function createKeyboardShortcuts({ firstNote, lastNote, keyboardConfig, flatsNeedShiftKey }) {
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
        key: key.flat.key,
        code: key.flat.code,
        shiftKey: !!flatsNeedShiftKey,
        midiNumber: currentMidiNumber,
      });
    } else {
      keyboardShortcuts.push({
        key: key.natural.key,
        code: key.natural.code,
        shiftKey: false,
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
    {
      "natural": {
        "key": "z",
        "code": "KeyZ"
      },
      "flat": {
        "key": "a",
        "code": "KeyA"
      }
    },
    {
      "natural": {
        "key": "x",
        "code": "KeyX"
      },
      "flat": {
        "key": "s",
        "code": "KeyS"
      }
    },
    {
      "natural": {
        "key": "c",
        "code": "KeyC"
      },
      "flat": {
        "key": "d",
        "code": "KeyD"
      }
    },
    {
      "natural": {
        "key": "v",
        "code": "KeyV"
      },
      "flat": {
        "key": "f",
        "code": "KeyF"
      }
    },
    {
      "natural": {
        "key": "b",
        "code": "KeyB"
      },
      "flat": {
        "key": "g",
        "code": "KeyG"
      }
    },
    {
      "natural": {
        "key": "n",
        "code": "KeyN"
      },
      "flat": {
        "key": "h",
        "code": "KeyH"
      }
    },
    {
      "natural": {
        "key": "m",
        "code": "KeyM"
      },
      "flat": {
        "key": "j",
        "code": "KeyJ"
      }
    },
    {
      "natural": {
        "key": ",",
        "code": "Comma"
      },
      "flat": {
        "key": "k",
        "code": "KeyK"
      }
    },
    {
      "natural": {
        "key": ".",
        "code": "Period"
      },
      "flat": {
        "key": "l",
        "code": "KeyL"
      }
    },
    {
      "natural": {
        "key": "/",
        "code": "Slash"
      },
      "flat": {
        "key": ";",
        "code": "Semicolon"
      }
    }
  ],
  HOME_ROW: [
    {
      "natural": {
        "key": "a",
        "code": "KeyA"
      },
      "flat": {
        "key": "q",
        "code": "KeyQ"
      }
    },
    {
      "natural": {
        "key": "s",
        "code": "KeyS"
      },
      "flat": {
        "key": "w",
        "code": "KeyW"
      }
    },
    {
      "natural": {
        "key": "d",
        "code": "KeyD"
      },
      "flat": {
        "key": "e",
        "code": "KeyE"
      }
    },
    {
      "natural": {
        "key": "f",
        "code": "KeyF"
      },
      "flat": {
        "key": "r",
        "code": "KeyR"
      }
    },
    {
      "natural": {
        "key": "g",
        "code": "KeyG"
      },
      "flat": {
        "key": "t",
        "code": "KeyT"
      }
    },
    {
      "natural": {
        "key": "h",
        "code": "KeyH"
      },
      "flat": {
        "key": "y",
        "code": "KeyY"
      }
    },
    {
      "natural": {
        "key": "j",
        "code": "KeyJ"
      },
      "flat": {
        "key": "u",
        "code": "KeyU"
      }
    },
    {
      "natural": {
        "key": "k",
        "code": "KeyK"
      },
      "flat": {
        "key": "i",
        "code": "KeyI"
      }
    },
    {
      "natural": {
        "key": "l",
        "code": "KeyL"
      },
      "flat": {
        "key": "o",
        "code": "KeyO"
      }
    },
    {
      "natural": {
        "key": ";",
        "code": "Semicolon"
      },
      "flat": {
        "key": "p",
        "code": "KeyP"
      }
    },
    {
      "natural": {
        "key": "'",
        "code": "Quote"
      },
      "flat": {
        "key": "[",
        "code": "BracketLeft"
      }
    }
  ],
  QWERTY_ROW: [
    {
      "natural": {
        "key": "q",
        "code": "KeyQ"
      },
      "flat": {
        "key": "1",
        "code": "Digit1"
      }
    },
    {
      "natural": {
        "key": "w",
        "code": "KeyW"
      },
      "flat": {
        "key": "2",
        "code": "Digit2"
      }
    },
    {
      "natural": {
        "key": "e",
        "code": "KeyE"
      },
      "flat": {
        "key": "3",
        "code": "Digit3"
      }
    },
    {
      "natural": {
        "key": "r",
        "code": "KeyR"
      },
      "flat": {
        "key": "4",
        "code": "Digit4"
      }
    },
    {
      "natural": {
        "key": "t",
        "code": "KeyT"
      },
      "flat": {
        "key": "5",
        "code": "Digit5"
      }
    },
    {
      "natural": {
        "key": "y",
        "code": "KeyY"
      },
      "flat": {
        "key": "6",
        "code": "Digit6"
      }
    },
    {
      "natural": {
        "key": "u",
        "code": "KeyU"
      },
      "flat": {
        "key": "7",
        "code": "Digit7"
      }
    },
    {
      "natural": {
        "key": "i",
        "code": "KeyI"
      },
      "flat": {
        "key": "8",
        "code": "Digit8"
      }
    },
    {
      "natural": {
        "key": "o",
        "code": "KeyO"
      },
      "flat": {
        "key": "9",
        "code": "Digit9"
      }
    },
    {
      "natural": {
        "key": "p",
        "code": "KeyP"
      },
      "flat": {
        "key": "0",
        "code": "Digit0"
      }
    },
    {
      "natural": {
        "key": "[",
        "code": "BracketLeft"
      },
      "flat": {
        "key": "-",
        "code": "Minus"
      }
    }
  ],
};
