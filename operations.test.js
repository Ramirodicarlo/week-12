import { expect } from "@jest/globals"
import * as operations from "./operations"

var op = operations

describe("Return text", () =>{
    test("Enter text and return the same text",() =>{
        expect(op.texto("house")).toBe("house")
    })
    test("Enter text and return the same text",() =>{
        expect(op.texto("1234")).toBe("1234")
    })
})

describe("Sum between two numbers", () =>{

    test("Sum of 1 and 2 = 3",() =>{
        expect(op.suma(1,2)).toBe(3)
    })
    test("Sum of 1 and -2 = -1",() =>{
        expect(op.suma(1,-2)).toBe(-1)
    })
    test("Sum of 1.54 and 2 = 3.54",() =>{
        expect(op.suma(1.54,2)).toBe(3.54)
    })
    test("Sum of a and b = ab",() =>{
        expect(op.suma("a","b")).toBe("ab")
    })
    test("Sum of nothing and 1 = NaN",() =>{
        expect(op.suma(undefined,1)).toBe(NaN)
    })
    test("Sum of 1,2,\"a\" and 1 =  \"1,2,a1\"",() =>{
        var arr = [1,2,"a"]
        expect(op.suma(arr,1)).toBe("1,2,a1")
    })
})

describe("Subtraction between two numbers", () =>{
    test("Subtraction of 2 and 1 = 1",() =>{
        expect(op.resta(2,1)).toBe(1)
    })
    test("Subtraction of -1 and 2 = -3",() =>{
        expect(op.resta(-1,2)).toBe(-3)
    })
    test("Sustraction of 2 and 1.54 = 0.46",() =>{
        expect(op.resta(2,1.54)).toBe(0.46)
    })
    test("Sustraction of a and b = NaN",() =>{
        expect(op.resta("a","b")).toBe(NaN)
    })
    test("Sustraction of nothing and 1 = -1",() =>{
        expect(op.resta(undefined,1)).toBe(NaN)
    })
    test("Sustraction of 1 and nothing = 1",() =>{
        expect(op.resta(1,undefined)).toBe(NaN)
    })
    test("Sustraction of 1,2,\"a\" and 1 =  1,2,\"a-1\"",() =>{
        var arr = [1,2,"a"]
        expect(op.resta(arr,1)).toBe(NaN)
    })
})

describe("Multiplication of two numbers", () =>{
    test("Multiplication of 2 and 3 = 6", () =>{
        expect(op.multiplicacion(2,3)).toBe(6)
    })
    test("Multiplication of -2 and 3 = -6", () =>{
        expect(op.multiplicacion(-2,3)).toBe(-6)
    })
    test("Multiplication of 2.5 and 3 = 7.5", () =>{
        expect(op.multiplicacion(2.5,3)).toBe(7.5)
    })
    test("Multiplication of nothing and 3 = 0", () =>{
        expect(op.multiplicacion(undefined,3)).toBe(NaN)
    })
    test("Multiplication of a and b = ab", () =>{
        expect(op.multiplicacion("a","b")).toBe(NaN)
    })
    test("Multiplication of 1,2,\"a\" and 2 = NaN", () =>{
        var arr = [1,2,"a"]
        expect(op.multiplicacion(arr,2)).toBe(NaN)
    })
})

describe("Division of two numbers", () =>{
    test("Dision of 100 and 5 = 20", () => {
        expect(op.division(100,5)).toBe(20)
    })
    test("Dision of 100 and 0 = No se puede dividir por 0", () => {
        expect(op.division(100,0)).toBeTruthy
    })
    test("Dision of a and b = NaN", () => {
        expect(op.division("a","b")).toBe(NaN)
    })
    test("Dision of 100 and 0.5 = 200", () => {
        expect(op.division(100,0.5)).toBe(200)
    })
    test("Dision of 0.5 and 100 = 0.005", () => {
        expect(op.division(100,5)).toBe(20)
    })
    test("Dision of 100 and -5 = -20", () => {
        expect(op.division(100,-5)).toBe(-20)
    })
    test("Dision of 1,2,\"a\" and 5 = NaN", () => {
        var arr = [1,2,"a"]
        expect(op.division(arr,5)).toBe(NaN)
    })
    test("Dision of nothing and 5 = NaN", () => {
        expect(op.division(undefined,5)).toBe(NaN)
    })
    test("Dision of 5 and nothing = NaN", () => {
        expect(op.division(5,undefined)).toBe(NaN)
    })
})

describe("Ttable of multiplication of a number", () =>{
    test("Table of 3 until 10 =[0,3,6,9,12,15,18,21,24,27,30]", ()=> {
        expect(op.tablaMultiplicar(3,undefined)).toStrictEqual([0,3,6,9,12,15,18,21,24,27,30])
    })
    test("Table of 3 until 3 =[0,3,6,9]", ()=> {
        expect(op.tablaMultiplicar(3,3)).toStrictEqual([0,3,6,9])
    })
    test("Table of 3 until a = []", ()=> {
        expect(op.tablaMultiplicar(3,"a")).toStrictEqual([])
    })
    test("Table of 3 until -1 = []", ()=> {
        expect(op.tablaMultiplicar(3,-1)).toStrictEqual([])
    })
})

describe("Power of a number", () =>{
    test("Power of 3^2 = 9",() =>{
        expect(op.potencia(3,2)).toBe(9)
    })
    test("Power of 3^0 = 1",() =>{
        expect(op.potencia(3,0)).toBe(1)
    })
    test("Power of 3^-1 =0.3333333333333333",() =>{
        expect(op.potencia(3,-1)).toBe(0.3333333333333333)
    })
    test("Power of 3^a =NaN",() =>{
        expect(op.potencia(3,"a")).toBe(NaN)
    })
})

describe("Anidation", () =>{

    test("Square of 2 + square of 3 = 13",()=>{
        expect(op.anidada(2,3)).toBe(13)
    })
    test("Square of 0 + square of 3 = 9",()=>{
        expect(op.anidada(0,3)).toBe(9)
    })
    test("Square of a + square of 3 = 13",()=>{
        expect(op.anidada("a",3)).toBe(NaN)
    })
    test("Square of -2 + square of 3 = 13",()=>{
        expect(op.anidada(-2,3)).toBe(13)
    })
    test("Square of nothing + square of 3 = NaN",()=>{
        expect(op.anidada(undefined,3)).toBe(NaN)
    })
})

describe("Zeros at left of a number", () =>{

    test("Put 2 zeros before 5",() => {
        expect(op.cerosIzq(5,3)).toBe("005")
    })
    test("Doesnt any zeros before 5",() => {
        expect(op.cerosIzq(5,1)).toBe("5")
    })
})
