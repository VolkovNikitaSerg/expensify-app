import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test("should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "2"
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense without id or wrong id", () => {
    const action = {
        type: "REMOVE_EXPENSE"
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ ...expenses ]);
});

test("should add expense", () => {
    const expense = {
        id: "4",
        description: "Car",
        note: "",
        amount: 10500,
        createdAt: 60000
    }
    const action = {
        type: "ADD_EXPENSE",
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test("should edit expense with id", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: "1",
        updates: {
            description: "Something"
        }
    }
    const updatedExpenses = expenses;
    updatedExpenses[0].description = "Something";
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(updatedExpenses);
});

test("should not edit expense withoud id or wrong id", () => {
    const action = {
        type: "EDIT_EXPENSE",
        updates: {
            description: "Something"
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses]);
});