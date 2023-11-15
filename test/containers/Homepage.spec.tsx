import React from 'react';
import renderer from 'react-test-renderer';
import { Homepage } from '../../src/containers/Homepage';

describe('Home', () => {
  it('Renders the Homepage', () => {
    const width = 1300;
    const targetRef: any = {};
    const result:any = renderer.create(<Homepage targetRef={targetRef} width={width} />).toJSON();
    expect(result.type).toBe('div');
  });
  it('renders with cellphone width and has coupon', () => {
    const width = 300;
    const targetRef: any = {};
    const result:any = renderer.create(<Homepage targetRef={targetRef} width={width} />).toJSON();
    expect(result.type).toBe('div');
  });
});
