import React, { useEffect, useRef, useCallback } from 'react';

// https://react.dev/reference/react/useCallback#usage
/* function ShippingForm() {

  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <button type="submit">Send</button>
    </form>
  );
} */

const FormPage = () => {
  return (
    <main>
      <h1>AJAX</h1>

      {/* <ShippingForm /> */}

    </main >
  )
}

export default FormPage
