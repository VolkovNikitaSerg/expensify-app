import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
    const action = removeExpense({ id: "1241" });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "1241"
    });
});

test("should setup edit expense action object", () => {
    const updates = { note:'New note value' };
    const action = editExpense("123", updates);
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123",
        updates
    })
});

test("should setup add expense action object with provided values", () => {
    const expenseData = {
        description: "Rent",
        amount: 109500,
        createdAt: 1000,
        note: "This was last months rent"
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test("should setup add expense action object with default value", () => {
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            description: "",
            note: "",
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});