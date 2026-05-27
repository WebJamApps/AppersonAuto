import React from 'react';
import { Contact } from '../../src/containers/Contact/index';
import { render } from '@testing-library/react';

describe('Contact', () => {
  it('Renders the Contact page', () => {
    const targetRef: any = {};
    const width = 1300;
    const result: any = render(<Contact targetRef={targetRef} width={width} />).container;
    expect(result.firstChild?.nodeName).toBe("DIV");
  });
  it('Renders NarrowMap when less than 1004', () => {
    const width = 300;
    const targetRef: any = {};
    const result: any = render(<Contact targetRef={targetRef} width={width} />).container;
    expect(result.firstChild?.nodeName).toBe("DIV");
  });
});
