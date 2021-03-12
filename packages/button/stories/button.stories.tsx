import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps } from '../src';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

type ButtonStoryType = Story<ButtonProps>;

const Template: ButtonStoryType = (args) => <Button {...args} />;

export const Default: ButtonStoryType = Template.bind({});
Default.args = {
  children: 'Click me',
};
