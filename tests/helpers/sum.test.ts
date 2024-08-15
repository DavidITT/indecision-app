import {describe, expect, test} from 'vitest'
import {addArray, sum} from "@/helpers/sum";

describe('add function', () => {
    test('adds 1 + 2 to equal 3', () => {

        //Preparacion
        const a = 1
        const b = 2

        //Estimulo
        const result = sum(a,b)

        //Comportamiento esperado
        expect(result).toBe(a + b)

    })
})

describe('addArray', () => {
    test('should return 0 if the array is empty', () => {

        //Prparacion y Estimulo
        const result = addArray([])

        //Comportamiento esperado
        expect(result).toBe(0)

    })


    test('should return the proper value of the addArayy function', () => {

        //Preparacion
        const arr = [1,2,3,4]

        //Estimulo
        const result = addArray(arr)

        //Comportamiento esperado
        expect(result).toBe(10)

    })
});


