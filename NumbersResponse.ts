//COUNT THE NUMBER OF OCCURENCES OF EACH ELEMENT IN THE LIST

// main class
class NumbersResponse {
    public constructor() {
        var numbers = [1, 1, 9, 2, 8, 4, 4, 7, 2, 4, 7, 0];
        this.run(numbers);
    }
    
    run(numbers: Number[] ){
			const uniqueNumbers = numbers.filter((value, index, self) => self.indexOf(value) === index).sort();

			uniqueNumbers.forEach(uniqueNumber => {
				let count = numbers.filter(number => number == uniqueNumber).length;
				console.log(`number: ${uniqueNumber} occurences: ${count}`)
			});
  }
}

new NumbersResponse();

	// number: 0 occurences: 1
	// number: 4 occurences: 3
	// number: 2 occurences: 2
	// number: 1 occurences: 2
	// number: 7 occurences: 2
	// number: 8 occurences: 1
	// number: 9 occurences: 1