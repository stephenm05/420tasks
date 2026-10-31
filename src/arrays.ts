import { totalmem } from "os";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const bookendNums: number[] = 
    (numbers.length === 0) ? 
        [] : 
        (numbers.length === 1 ) ? 
            [numbers[0], numbers[0]] :
            [numbers[0], numbers[numbers.length-1]];
    return bookendNums;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripleNums: number[] = 
        numbers.map((num: number): number => (3*num));
    return tripleNums;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const intNums: number[] = 
        numbers.map((num: string): number => /[^\d-]/.test(num) ? 0 : +num);
    return intNums;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const dollarlessAmounts: string[] = 
        amounts.map((amount: string): string => amount.charAt(0) === '$' ? amount.slice(1) : amount);
    return stringsToIntegers(dollarlessAmounts);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const shoutMessages: string[] = 
        messages.filter((message: string): boolean => message.charAt(message.length-1) !== '?')
            .map((message: string): string => message.charAt(message.length-1) === '!' ? message.toUpperCase() : message);
    return shoutMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortCount: number =
        words.reduce((count: number, word: string) => word.length < 4 ? count+1 : count, 0);
    return shortCount;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const isAllRGB: boolean =
        colors.length === 0 ||
        colors.every((color: string): boolean =>
            color === "red" ||
            color === "blue" ||
            color === "green" );
    return isAllRGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum: number =
        addends.reduce((total: number, addend: number): number => total+addend, 0);
    return `${sum}=${addends.length > 0 ? addends.join("+") : "0"}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let negInd: number = values.findIndex(((value: number): boolean => value < 0));
    negInd = negInd === -1 ? values.length : negInd;
    const posSum: number =
        values.reduce((sum: number, value: number, curInd: number): number => curInd < negInd ? sum+value : sum, 0);
    const valsWithSum: number[] = values.toSpliced(negInd+1, 0, posSum);
    return valsWithSum;
}
