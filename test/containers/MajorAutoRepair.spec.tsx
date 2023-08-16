import React from 'react';
import renderer from 'react-test-renderer';
import { Major } from '../../src/containers/MajorAutoRepair';

describe('Major Auto Repair', () => {
  it('Renders the Homepage', () => {
    const targetRef: any = {};
    const width = 1300;
    const height = 1300;
    const result:any = renderer.create(<Major targetRef={targetRef} width={width} height={height} />).toJSON();
    expect(result.type).toBe('div');
  });
  it('renders with cellphone width and has coupon', () => {
    const width = 300;
    const height = 300;
    const targetRef: any = {};
    const result:any = renderer.create(<Major targetRef={targetRef} width={width} height={height} />).toJSON();
    expect(result.type).toBe('div');
  });
});
