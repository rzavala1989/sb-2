import { Person, PersonProps } from './Person';
import { Meta, Story } from '@storybook/react';
import React from 'react';

//Build a mock person object
const mockPerson = {
  id: '1',
  imgUrl:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80',
  name: 'John Doe',
  jobTitle: 'Engineer'
};

//Meta data for the component
export default {
  title: 'Molecules/Person',
  component: Person
} as Meta;

//Build outr person story
export const Default: Story<PersonProps> = (args) => <Person {...args} />;
//Define default arguments for the Default story
Default.args = {
  ...mockPerson
};
