// https://stackoverflow.com/questions/71685441/react-testing-library-gives-console-error-for-reactdom-render-in-react-18

import React from "react";
import { render, screen } from '@testing-library/react';
import HelloPage from "./hey";
import Hello from "../components/hello"

test('renders react component', () => {
  render(<HelloPage />);

  // console.log(screen); // shows some functions

  const divElement = screen.getByText('Hey, stranger'); // works
  // const divElement = screen.getByText('Hey'); // fails
  expect(divElement).toBeInTheDocument();
});

test('props', () => {
  render(<HelloPage>
    <Hello name="steve" />
  </HelloPage>);

  // console.log(screen); // shows some functions

  const propsElement = screen.getByText('Hello, steve!'); // works
  expect(propsElement).toBeInTheDocument();
});
