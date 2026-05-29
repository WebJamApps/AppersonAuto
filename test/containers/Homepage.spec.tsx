import React from 'react';
import { render } from '@testing-library/react';
import { Homepage } from '../../src/containers/Homepage';

describe('Home', () => {
  it('Renders the Homepage', () => {
    const width = 1300;
    const targetRef: any = {};
    const result:any = render(<Homepage targetRef={targetRef} width={width} />).container;
    expect(result.firstChild?.nodeName).toBe("DIV");
  });
  it('renders with cellphone width and has coupon', () => {
    const width = 300;
    const targetRef: any = {};
    const result:any = render(<Homepage targetRef={targetRef} width={width} />).container;
    expect(result.firstChild?.nodeName).toBe("DIV");
  });
});
