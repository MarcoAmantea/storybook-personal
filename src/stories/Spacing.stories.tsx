import React from 'react';
import { Meta, Story } from '@storybook/react';
import { spacing } from '../Style/Spacing'; // percorso corretto

export default {
  title: 'Design System/Spacing',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
    docs: {
      description: {
        component: 'Questa story mostra i valori di spacing definiti nel nostro design system e come vengono applicati visivamente.',
      },
    },
  
} as Meta;

const spacingEntries = Object.entries(spacing);

export const SpacingExamples: Story = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.md }}>
    {spacingEntries.map(([key, value]) => (
      <div
        key={key}
        style={{
          padding: value,
          background: '#f0f0f0',
          border: '1px solid #ccc',
          margin: '8px',
          textAlign: 'center',
          minWidth: '80px',
        }}
      >
        <strong>{key}</strong>
        <br />
        <span>{value}</span>
      </div>
    ))}
  </div>
);