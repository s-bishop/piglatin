        //What is this? 
//const { test, expect } = require("@jest/globals");

//Tests for starting with vowels
const { test, expect } = require("@jest/globals");
const pl = require("./script");

test("apple translates appleway", () => {
    expect(pl("apple")).toBe("appleway");
}) 

test("eagle translates as eagleway", () => {
    expect(pl("eagle")).toBe("eagleway");
})

test("orange translates as orangeway", () => {
    expect(pl("orange")).toBe("orangeway");
})

test("appointment translates as appointmentway", () => {
    expect(pl("appointment")).toBe("appointmentway");
})

test("office translates as officeway", () => {
    expect(pl("office")).toBe("officeway");
})

//Tests for starting with consonants
test("banana translates to ananabay", () => {
    expect(pl("banana")).toBe("ananabay");
})

test("cat translates to atcay", () => {
    expect(pl("cat")).toBe("atcay");
})

test("psychology translates to ologypsychay" , () => {
    expect(pl("psychology")).toBe("ologypsychay");
})

test("Action translates and converts to actionway", () => {
    expect(pl("Action")).toBe("actionway")
})

test("converts all to lowercase", () => {
    expect(pl("ACTION")).toBe("actionway")
})