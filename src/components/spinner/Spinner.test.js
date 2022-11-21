import React from "react";
import { render } from '@testing-library/react';

import { spinner } from "./Spinner";

describe('Spinner', () => {
    test('dsplays spinner', () => {
        const { getByTestId } = render(<Spinner />);
        const elem = getByTestId('Spinner');
        expect(elem).toBeInTheDocument();
    });

    test('spinner cointains 3 elements', () =>{
        const { getByTestId } = render (<Spinner />);
        const elem = getByTestId('spinner');
        expect(elem.children.length).toBe(3);
    })
});