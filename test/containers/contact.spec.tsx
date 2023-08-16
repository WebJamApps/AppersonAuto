import React from 'react';
import { Contact } from '../../src/containers/Contact/index';
import renderer from 'react-test-renderer';

describe('Contact', () => {
  it('Renders the Contact page', () => {
    const targetRef: any = {};
    const width = 1300;
    const result: any = renderer.create(<Contact targetRef={targetRef} width={width} />).toJSON();
    expect(result.type).toBe('div');
  });
  it('Renders NarrowMap when less than 1004', () => {
    const width = 300;
    const targetRef: any = {};
    const result: any = renderer.create(<Contact targetRef={targetRef} width={width} />).toJSON();
    expect(result.type).toBe('div');
  });
});
