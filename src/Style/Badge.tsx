import React from 'react';

// Definizione delle proprietà (props) che il componente Badge accetta
export interface BadgeProps {
  /** Testo da visualizzare all'interno del badge */
  text: string;
  /** Colore di sfondo del badge (default: '#0070f3') */
  backgroundColor?: string;
  /** Colore del testo del badge (default: '#fff') */
  textColor?: string;
}

/**
 * Componente Badge: visualizza un badge con stile predefinito e personalizzabile.
 * Può essere utilizzato per mostrare etichette o stati particolari nell'interfaccia.
 */
export const Badge: React.FC<BadgeProps> = ({
  text,
  backgroundColor = '#0070f0',
  textColor = '#ffff',
}) => {
  // Ensure no unreachable code exists before this return statement
  return (
    <div
      style={{
        padding: '8px 16px',
        borderRadius: '12px',
        backgroundColor,
        color: textColor,
        fontWeight: 'bold',
        display: 'inline-block',
      }}
    >
      {text}
    </div>
  );
};