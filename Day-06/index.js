// Q. arrow function to count even and odd nubmber between range 10 to 30



const countFunction = (start, end) => {
    var evenCount = 0;
    var oddCount = 0;
    while (start <= end) {

        if (start % 2 == 0) {
            evenCount++;
        }
        else {
            oddCount++;
        }

        start++
    }

    console.log(evenCount, "even count", oddCount, "odd count");
}


countFunction(10, 30);