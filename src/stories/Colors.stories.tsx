import React from 'react';
import { Meta, Story } from '@storybook/react';
import { colors, redScale, greenScale, blueScale } from '../Style/colors'; // Assicurati che il percorso sia corretto

export default {
  title: 'Design System/Colors', // Titolo della story: mostra i colori del design system
  parameters: {
    layout: 'centered', // Imposta il layout centrato per una visualizzazione migliore
  },
  tags: ['autodocs'], // Abilita la generazione automatica della documentazione
  docs: {
    description: {
      component: 'Questa story mostra i colori definiti nel design system, con esempi visivi e i rispettivi codici esadecimali.', // Descrizione della story
    },
  },
} as Meta;

// Crea un array di coppie [chiave, valore] dai token dei colori definiti in colors.ts
const colorEntries = Object.entries(colors);

export const ColorExamples: Story = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
    {/* Per ogni colore, renderizza un esempio visivo con un box e mostra il nome e il codice */}
    {colorEntries.map(([key, color]) => (
      <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Box di esempio con il colore di sfondo */}
        <div style={{ width: '100px', height: '100px', backgroundColor: color, border: '1px solid #ccc' }}></div>
        <span>{key}</span>
        <code>{color}</code>
      </div>
    ))}
  </div>
);

// Definizione dei token dei colori per il testo (accessibilità)
const textColorEntries = Object.entries({
  textPrimary: '#000000',   // Colore principale per testi ad alta leggibilità
  textSecondary: '#666666', // Colore secondario per testi
  textInverted: '#FFFFFF',  // Colore per testi su sfondi scuri
  textDisabled: '#CCCCCC',  // Colore per testi disabilitati
});

// Aggiunta di una nuova storia per i colori del testo
export const TextColorExamples: Story = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginTop: '32px' }}>
    <h2 style={{ width: '100%', textAlign: 'center' }}>Colori per il Testo</h2>
    {/* Per ogni colore di testo, renderizza un esempio visivo con un box e mostra il nome e il codice */}
    {textColorEntries.map(([key, color]) => (
      <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Box di esempio con il colore di sfondo */}
        <div style={{ width: '100px', height: '100px', backgroundColor: color, border: '1px solid #ccc' }}></div>
        <span>{key}</span>
        <code>{color}</code>
      </div>
    ))}
  </div>
);

// Story per visualizzare le scale di tonalità per ROSSO, VERDE e BLU
export const ColorScales: Story = () => {
  // Funzione per renderizzare una scala con un titolo e i relativi box di colore
  const renderScale = (title: string, scale: Record<string, string>) => {
    const entries = Object.entries(scale);
    return (
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ textAlign: 'center' }}>{title}</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          {entries.map(([key, value]) => (
            <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '80px', height: '80px', backgroundColor: value, border: '1px solid #ccc' }}></div>
              <span>{key}</span>
              <code>{value}</code>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderScale('Scala Rosso', redScale)}
      {renderScale('Scala Verde', greenScale)}
      {renderScale('Scala Blu', blueScale)}
    </div>
  );
};