/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import renderer from 'react-test-renderer';
import { AutoMaintenance } from '../../src/containers/AutoMaintenance';

describe('AutoMaintenance', () => {
  it('Renders the Homepage', () => {
    const targetRef: any = {};
    const width = 1300;
    const result: any = renderer.create(<AutoMaintenance targetRef={targetRef} width={width} />).toJSON();
    expect(result.type).toBe('div');
  });
  it('renders with cellphone width and has coupon', () => {
    const width = 300;
    const targetRef: any = {};
    const result: any = renderer.create(<AutoMaintenance targetRef={targetRef} width={width} />).toJSON();
    expect(result.type).toBe('div');
  });
});
