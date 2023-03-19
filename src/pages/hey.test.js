// https://stackoverflow.com/questions/71685441/react-testing-library-gives-console-error-for-reactdom-render-in-react-18

import React from "react";
import { render, screen } from '@testing-library/react';
import HelloPage from "./hey";

test('renders react component', () => {
  render(<HelloPage />);

  // console.log(screen);
  // console.log(screen.debug);

  const divElement = screen.getByText('Hey, stranger'); // works
  // const divElement = screen.getByText('Hey'); // fails
  expect(divElement).toBeInTheDocument();
});
