import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => { });
const { getByText } = render(<App />);
const linkElement = getByText(/learn react/i);
expect(linkElement).toBeInTheDocument();

// test("form shows success message on submit with form details", () => {});
it('renders without crashing', () => {
    render(
        <div className="success-message">You have ordered some plants! Woo-hoo!</div>
    );
});