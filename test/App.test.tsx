import React from "react";
import {expect, it} from "vitest";
import {act, render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import {fireEvent} from "@testing-library/react";
import Main from "../src/components/Main"

it("add a new ingredient to existing ingredient list", async () => {
    render(<Main ingredients={["Orange", "Chicken"]}></Main>)
    await act(async () => {
        const input = screen.getByPlaceholderText("Add something here");
        await userEvent.type(input, "Lemon");
    });
    fireEvent.submit(screen.getByTestId("ingredient-form"));
    let lemon =  screen.queryByTestId("Lemon")!;
    expect(lemon.textContent).toBe("Lemon");
})

