import { Pill, PillProps } from './Pill';
import { Meta, Story } from '@storybook/react';
import React from 'react';

// This tells Storybook how to list your stories and provide information
export default {
  title: 'Atoms/Pill',
  component: Pill,
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' }
  }
} as Meta;

// With named export we define component's story
export const Default: Story<PillProps> = (args) => <Pill {...args} />;
// Define default arguments for the Default story
Default.args = {
  backgroundColor: '#000',
  textColor: '#fff',
  text: 'I am a pill'
};
