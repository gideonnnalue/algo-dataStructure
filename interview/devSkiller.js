const checkBoard = (board, word) => {
  const formMoves = (curArray, newWord, formedMoves) => {
    if (!word.charAt(0)) {
      return formedMoves;
    }
    let currentLetter = newWord.charAt(0);
    let currentPosition = [];

    for (let i = 0; i < curArray.length; i++) {
      if (currentLetter === curArray[i]) {
        currentPosition.push(i);
      }
    }
    if (currentLetter.length === 1) {
      const pos = Math.floor(curArray.length / 2);
      const side = curArray.length - pos;

      const newArr = [...curArray];
      const formedMoves = [];
      if (side < pos) {
        for (let i = curArray.lenght - 1; i > pos; i--) {
          formedMoves.push({direction: 'Right', value: "0"})
          newArr.pop(newArr.unshift(newArr[i]))
        }
        formedMoves.push({direction: 'Right', value: currentLetter})
        newArr.pop();
      } else {
        for (let j = 0; j < pos - 1; j++) {
          formedMoves.push({direction: 'Left', value: "0"})
          newArr.shift(newArr.push(newArr[0]));
        }
        formedMoves.push({direction: 'Left', value: currentLetter})
        newArr.shift();
      }
      console.log(newArr);
      console.log(formedMoves);
      return formMoves(newArr, word.substring(1), moves)
    }
  };

  return formMoves(board, word, []);
};

var testBoard = ["a", "z", "c", "t", "v", "b"];
var moves = checkBoard(testBoard, "cat");
