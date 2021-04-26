import { expect } from "@jest/globals";
import * as operations from "./operations";

var op = operations;

test("Enter text and return the same text",() =>{
    expect(op.texto("house")).toBe("house")
});

test("Sum 1 and 2 = 3",() =>{
    expect(op.suma(1,2)).toBe(3)
});
test("Sum a and b = ab",() =>{
    expect(op.suma("a","b")).toBe("ab")
});
