import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values", () => {
    const state = filtersReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    });
});

test("should set sortBy to amount", () => {
    const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" } );
    expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
    const state = filtersReducer(undefined, { type: "SORT_BY_DATE" } );
    expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
    const state = filtersReducer(undefined, { type: "SET_TEXT_FILTER", text: "hello" });
    expect(state.text).toBe("hello");
});

test("should set start date", () => {
    const state = filtersReducer(undefined, { type: "SET_START_DATE", startDate: 5 });
    expect(state.startDate).toBe(5);
});

test("should set end date", () => {
    const state = filtersReducer(undefined, { type: "SET_END_DATE", endDate: 10 });
    expect(state.endDate).toBe(10);
});