import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Input, { InputProps } from '../Style/Input';
import '../Style/Input.css';

export default {
  title: 'Design System/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['text', 'select', 'radio'],
    },
    value: { control: 'text' },
    options: { control: 'object' },
  },
} as Meta<InputProps>;

const Template: Story<InputProps> = (args) => {
  // Gestione di uno stato locale così l’input text e radio possono cambiare il valore
  const [value, setValue] = useState(args.value || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return (
    <Input
      {...args}
      value={value}
      onChange={handleChange}
    />
  );
};

export const DefaultText = Template.bind({});
DefaultText.args = {
  label: 'Label',
  type: 'text',
  value: 'Option 1',
};

export const SelectInput = Template.bind({});
SelectInput.args = {
  label: 'Label',
  type: 'select',
  value: 'Option 1',
  options: ['Option 1', 'Option 2'],
};

export const RadioInput = Template.bind({});
RadioInput.args = {
  label: 'Label',
  type: 'radio',
  value: 'Option 2', // se vuoi di default sia selezionata la 2
  options: ['Option 1', 'Option 2'],
};