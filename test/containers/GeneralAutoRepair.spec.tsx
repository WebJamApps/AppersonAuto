import React from 'react';
import { render } from '@testing-library/react';
import { General } from '../../src/containers/GeneralAutoRepair';

describe('GeneralAutoRepair', () => {
  it('Renders the GeneralAutoRepair', () => {
    const width = 1300;
    const result:any = render(<General width={width} />).container;
    expect(result.firstChild?.nodeName).toBe("DIV");
  });
  it('renders with cellphone width and has coupon', () => {
    const width = 300;
    const result:any = render(<General width={width} />).container;
    expect(result.firstChild?.nodeName).toBe("DIV");
  });
});
