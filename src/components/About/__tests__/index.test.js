import React from 'react'
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

//ensure no leftover memory data
afterEach(cleanup);

describe('About component', () => {
    //baseline test-(whah is being tested, callback() => )
    it('renders', () => {
        render(<About />);
    });

    it('matches snapshot DOM node structure', () => {
        const { asFragment } =render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });


  })