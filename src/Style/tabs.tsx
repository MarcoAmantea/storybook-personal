// /Users/badrich/Desktop/story-book-def/storybook-definitivissimo/src/Style/Tabs.tsx
import React, { useState, useRef } from 'react';
import './Tabs.css';

interface TabData {
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: TabData[];
  defaultActive?: number;
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultActive = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultActive);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const direction = e.shiftKey ? -1 : 1;
      const nextIndex = (index + direction + tabs.length) % tabs.length;
      setActiveTab(nextIndex);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <div className="tabs-container">
      {/* Aggiungiamo role="tablist" al contenitore dei pulsanti */}
      <div className="tab-buttons" role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            ref={(el) => (tabRefs.current[index] = el)}
            onClick={() => setActiveTab(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`tab-button ${index === activeTab ? 'active' : ''}`}
            role="tab"
            aria-selected={index === activeTab}
            aria-controls={`tabpanel-${index}`}
            tabIndex={index === activeTab ? 0 : -1}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content" role="tabpanel" id={`tabpanel-${activeTab}`}>
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;