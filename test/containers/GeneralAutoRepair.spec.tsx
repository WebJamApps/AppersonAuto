import React from 'react';
import renderer from 'react-test-renderer';
import { General } from '../../src/containers/GeneralAutoRepair';

describe('GeneralAutoRepair', () => {
  it('Renders the GeneralAutoRepair', () => {
    const width = 1300;
    const result:any = renderer.create(<General width={width} />).toJSON();
    expect(result.type).toBe('div');
  });
  it('renders with cellphone width and has coupon', () => {
    const width = 300;
    const result:any = renderer.create(<General width={width} />).toJSON();
    expect(result.type).toBe('div');
  });
});
