import React from 'react';
import { render } from '@testing-library/react';
import { Major } from '../../src/containers/MajorAutoRepair';

describe('Major Auto Repair', () => {
  it('Renders the Homepage', () => {
    const targetRef: any = {};
    const width = 1300;
    const result:any = render(<Major targetRef={targetRef} width={width} />).container;
    expect(result.firstChild?.nodeName).toBe("DIV");
  });
  it('renders with cellphone width and has coupon', () => {
    const width = 300;
    const targetRef: any = {};
    const result:any = render(<Major targetRef={targetRef} width={width} />).container;
    expect(result.firstChild?.nodeName).toBe("DIV");
  });
});
