function multiplication(a: number, b: number): number {
    return a * b;
}

test('Multiply 3 * 7 to get 21', () => {
    expect(multiplication(3, 7)).toBe(21);
});