import React from 'react';
import { Meta, Story } from '@storybook/react';
import Tabs from '../Style/Tabs';
import '../Style/Tabs.css'; // Assicurati che il percorso sia corretto

export default {
  title: 'Design System/Tabs',
  component: Tabs,
  argTypes: {
    darkMode: { control: 'boolean' },
  },
  args: {
    darkMode: false, // Modalità light per default
  },
} as Meta;

// Template che applica la classe 'dark' se darkMode è true
const Template = (args) => (
  <div className={args.darkMode ? 'dark' : ''}>
    <Tabs {...args} />
  </div>
);

// Story esempio con 3 tabs
export const ThreeTabs = Template.bind({});
ThreeTabs.args = {
  tabs: [
    {
      label: 'Tab 1',
      content: (
        <div>
          <p>Contenuto per Tab 1</p>
          <hr />
          <p>Usa il tasto TAB per spostarti alla tab2.</p>
        </div>
      ),
    },
    {
      label: 'Tab 2',
      content: (
        <div>
          <p>Contenuto per Tab 2</p>
          <hr />
          <p>Usa il tasto TAB per spostarti alla tab3.</p>
        </div>
      ),
    },
    {
      label: 'Tab 3',
      content: (
        <div>
          <p>Contenuto per Tab 3</p>
          <hr />
          <p>Usa il tasto TAB per tornare alla tab1.</p>
        </div>
      ),
    },
  ],
  defaultActive: 0,
  darkMode: false, // Cambia a 'true' nel pannello dei controlli per attivare la dark mode
};