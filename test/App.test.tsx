import React from "react";
import {expect, it} from "vitest";
import {act, render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import {fireEvent} from "@testing-library/react";
import Main from "../src/components/Main"

const emptyList:Array<string> = [];
const oneIngredient:Array<string> =["Orange"];
const fourIngredients:Array<string> = ["Orange", "Chicken", "Lemon", "Spinach"]

it("add a new ingredient to existing ingredient list", async () => {
    render(<Main ingredients={[...oneIngredient]}></Main>)
    await act(async () => {
        const input = screen.getByPlaceholderText("Add something here");
        await userEvent.type(input, "Lemon");
    });
    fireEvent.submit(screen.getByTestId("ingredient-form"));
    let lemon =  screen.queryByTestId("Lemon")!;
    expect(lemon.textContent).toBe("Lemon");
})

it("don't show div when no ingredients", ()=> {
    render(<Main ingredients={emptyList}></Main>)
    expect(() => screen.getByTestId("ingredient-list") )
        .toThrow("Unable to find an element by: [data-testid=\"ingredient-list\"]\n")
});

it("show div when ingredients", ()=> {
    render(<Main ingredients={oneIngredient}></Main>)
    expect(screen.getByTestId("ingredient-list")).toBeVisible();
});

it("don't show request button when less than 4 ingredients", ()=> {
    render(<Main ingredients={oneIngredient}></Main>)
    expect(() => screen.getByTestId("request-button") )
        .toThrow("Unable to find an element by: [data-testid=\"request-button\"]\n")
});

it("show request button when more than 3 ingredients", ()=> {
    render(<Main ingredients={fourIngredients}></Main>)
    expect(screen.getByTestId("request-button")).toBeVisible();
});

it("show generated recipe when pressing the request button", async ()=> {
    render(<Main ingredients={fourIngredients}></Main>)
    await act(async () => {
        const input = screen.getByTestId("request-button");
        await userEvent.click(input);
    });
    expect(screen.getByTestId("generated-recipe")).toBeVisible();
});

it("hide generated recipe when pressing the request button twice", async ()=> {
    render(<Main ingredients={fourIngredients}></Main>)
    await act(async () => {
        const input = screen.getByTestId("request-button");
        await userEvent.click(input);
        await userEvent.click(input);
        
    });
    expect(() => screen.getByTestId("generated-recipe") )
        .toThrow("Unable to find an element by: [data-testid=\"generated-recipe\"]")
});


