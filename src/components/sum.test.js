import React from "react";
import { render, screen } from '@testing-library/react';
import Sum from "./sum";

test('math', () => {
  render(<Sum a='1' b='2' />);

  // console.log(screen); // shows some functions

  const divElement = screen.getByText('3');
  expect(divElement).toBeInTheDocument();
});
