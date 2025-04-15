// /Users/badrich/Desktop/story-book-def/storybook-definitivissimo/src/Style/Badge.tsx

import React from 'react';
import './Badge.css';

/** Proprietà supportate dal Badge */
export interface BadgeProps {
  /** Testo da visualizzare all'interno del badge */
  text: string;
  /** Variante del badge: definisce i colori predefiniti */
  variant?: 'default' | 'invertito' | 'positivo';
  /** Colore di sfondo personalizzato (se omesso vengono usati i colori di variante) */
  backgroundColor?: string;
  /** Colore del testo personalizzato (se omesso vengono usati i colori di variante) */
  textColor?: string;
}

/** Componente Badge. Usa le varianti per impostare colori predefiniti o i props per override manuali. */
export const Badge: React.FC<BadgeProps> = ({
  text,
  variant = 'default',
  backgroundColor,
  textColor,
}) => {
  let bg = backgroundColor;
  let color = textColor;

  // Se non sono forniti backgroundColor e textColor personalizzati,
  // usiamo i colori predefiniti per la variante
  if (!backgroundColor && !textColor) {
    switch (variant) {
      case 'invertito':
        bg = '#ffffff';   // Sfondo bianco
        color = '#00509e'; // Blu scuro
        break;
      case 'positivo':
        bg = '#2e7d32';   // Verde profondo
        color = '#ffffff'; // Bianco
        break;
      default:
        bg = '#00509e';   // Blu scuro
        color = '#ffffff'; // Bianco
    }
  }

  return (
    <span className="badge" style={{ backgroundColor: bg, color: color }}>
      {text}
    </span>
  );
};