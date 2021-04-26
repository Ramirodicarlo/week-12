import { expect } from "@jest/globals";
import * as operations from "./operations";

var op = operations;
//1

test("Enter text and return the same text",() =>{
    expect(op.texto("house")).toBe("house")
});
test("Enter text and return the same text",() =>{
    expect(op.texto("1234")).toBe("1234")
});

//2

test("Sum of 1 and 2 = 3",() =>{
    expect(op.suma(1,2)).toBe(3)
});
test("Sum of 1 and -2 = -1",() =>{
    expect(op.suma(1,-2)).toBe(-1)
});
test("Sum of 1.54 and 2 = 3.54",() =>{
    expect(op.suma(1.54,2)).toBe(3.54)
});
test("Sum of a and b = ab",() =>{
    expect(op.suma("a","b")).toBe("ab")
});
test("Sum of null and 1 = 1",() =>{
    expect(op.suma(null,1)).toBe(1)
})
test("Sum of 1,2,\"a\" and 1 =  1,2,\"a1\"",() =>{
    var arr = [1,2,"a"];
    var arr2 = [1,2,"a1"];
    expect(op.suma(arr,1)).toBe(arr2)
});

//3
test("Subtraction of 2 and 1 = 1",() =>{
    expect(op.resta(2,1)).toBe(1)
});
test("Subtraction of -1 and 2 = -3",() =>{
    expect(op.suma(-1,2)).toBe(-3)
});
test("Sustraction of 2 and 1.54 = 0.46",() =>{
    expect(op.suma(2,1.54)).toBe(0.46)
});
test("Sustraction of a and b = NaN",() =>{
    expect(op.suma("a","b")).toBe("NaN")
});
test("Sustraction of null and 1 = -1",() =>{
    expect(op.suma(null,1)).toBe(-1)
});
test("Sustraction of 1 and null = 1",() =>{
    expect(op.suma(1,null)).toBe(1)
});
test("Sustraction of 1,2,\"a\" and 1 =  1,2,\"a-1\"",() =>{
    var arr = [1,2,"a"];
    expect(op.suma(arr,1)).toBe(NaN)
});
//3
