const convert = (number) => Object.entries({ 3: "Pling", 5: "Plang", 7: "Plong" })
        .reduce((drops, [value, drop]) =>  drops + (number % value ? String() : drop), String())
        || String(number);