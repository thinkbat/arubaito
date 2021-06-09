import React, { useRef } from 'react';
import { mount } from 'enzyme';
import EmbedCodePopup from './embed-code-popup';

const snippet = "<a href='https://main-orange.capstage.net/reviews/120550/Asana?utm_source=vendor&utm_medium=badge&utm_campaign=capterra_reviews_badge'>  <img border='0' src='https://assets.capterra.com/badge/670dcece851dff41c822bd540e4bde16.png?v=2083443&p=120550' /></a>";

const mockBtnClick = jest.fn();

// mock useRef
jest.mock('react', () => {
  const originReact = jest.requireActual('react');
  const mUseRef = jest.fn();
  return {
    ...originReact,
    useRef: mUseRef,
  };
});
useRef.mockReturnValue({ current: EmbedCodePopup });

// mock eventlisteners
const events = {};
window.addEventListener = jest.fn((event, callback) => {
  events[event] = callback;
});


const wrapper = mount(
  <EmbedCodePopup onClose={mockBtnClick} position='left'>
    <EmbedCodePopup.CodeSnippet>
      {snippet}
    </EmbedCodePopup.CodeSnippet>
  </EmbedCodePopup>
)

describe('EmbedCodePopup', () => {
  it('renders the <EmbedCodePopup/> Components', () => {
    const outerWrapper = wrapper.find(EmbedCodePopup);
    const codeSnippet = wrapper.find(EmbedCodePopup.CodeSnippet);

    expect(outerWrapper.length).toEqual(1);
    expect(codeSnippet.length).toEqual(1);
  });

  it('calls the onClose function on button click', () => {
    wrapper.find('button').simulate('click');
    expect(mockBtnClick).toHaveBeenCalledTimes(1);
  });

  it('has snippet as children', () => {
    const codeSnippet = wrapper.find(EmbedCodePopup.CodeSnippet);
    expect(codeSnippet.props('children').children).toEqual(snippet);
  });

  it('calls onClose on click outside the popup', () => {
    events.click({ target: document });
    expect(mockBtnClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose on click inside the popup', () => {
    events.click({ target: wrapper.getDOMNode() });
    expect(mockBtnClick).toHaveBeenCalledTimes(0);
  });

});