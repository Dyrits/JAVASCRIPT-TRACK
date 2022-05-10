const convert = (number) => Object.entries({ 3: "Pling", 5: "Plang", 7: "Plong" })
        .reduce((rain, [value, drop]) =>  rain + (number % value ? String() : drop), String())
        || String(number);