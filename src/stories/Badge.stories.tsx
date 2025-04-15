// /Users/badrich/Desktop/story-book-def/storybook-definitivissimo/src/Style/Badge.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Badge, BadgeProps } from '../Style/Badge'; // Percorso coerente con la localizzazione del file
import '../Style/Badge.css';

const meta: Meta<BadgeProps> = {
  title: 'Design System/Badge',
  component: Badge,
  tags: ['autodocs'], // Abilita la generazione automatica della documentazione in Storybook 7+
  argTypes: {
    text: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['default', 'invertito', 'positivo'],
    },
    backgroundColor: { control: { type: 'color' } },
    textColor: { control: { type: 'color' } },
  },
  args: {
    text: 'Badge',
    variant: 'default',
  },
};
export default meta;

// Tipologia di Story
type Story = StoryObj<BadgeProps>;

// Story singola: Badge di default
export const DefaultBadge: Story = {
  args: {
    text: 'Badge',
    variant: 'default',
  },
};

// Story singola: Badge invertito
export const InvertitoBadge: Story = {
  args: {
    text: 'Badge invertito',
    variant: 'invertito',
  },
};

// Story singola: Badge positivo
export const PositivoBadge: Story = {
  args: {
    text: 'Badge positivo',
    variant: 'positivo',
  },
};

// Story che li mostra tutti insieme in una riga o colonna
export const AllBadges: Story = {
  name: 'Docs',
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Badge text="Default" variant="default" />
      <Badge text="Invertito" variant="invertito" />
      <Badge text="Positivo" variant="positivo" />
    </div>
  ),
};