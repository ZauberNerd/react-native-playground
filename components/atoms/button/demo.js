import React from 'react';
import Button from './';

export default [{
  title: 'A basic button demo',
  render: () => <Button text="I'm a button" />
}, {
  title: 'A button with a long text',
  render: () => <Button text="I'm a button with a lot of text blah blal blah" />
}];
