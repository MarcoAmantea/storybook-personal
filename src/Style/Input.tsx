// /src/Style/Input.tsx
import React from 'react';
import './Input.css';

export interface InputProps {
  /** Etichetta del campo */
  label: string;
  /** Tipo di input: "text", "select" oppure "radio" */
  type: 'text' | 'select' | 'radio';
  /** Valore corrente (per il campo text e select) */
  value?: string;
  /** Opzioni per select e radio */
  options?: string[];
  /** Handler per il cambiamento (text, select, radio) */
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

/**
 * Componente Input inline con etichetta e campo.
 * - Per "text" e "select": utilizza una <label> associata all'input.
 * - Per "radio": avvolge le opzioni in un <fieldset> con <legend>.
 */
export const Input: React.FC<InputProps> = ({
  label,
  type,
  value,
  options,
  onChange,
}) => {
  // Creiamo un id univoco basato sul label (assumendo che il label sia univoco per ogni istanza)
  const id = `${type}-${label.replace(/\s+/g, '-').toLowerCase()}`;

  if (type === 'select') {
    return (
      <div className="input-wrapper">
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
        <select
          id={id}
          className="input-select"
          value={value}
          onChange={onChange}
        >
          {options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    );
  } else if (type === 'radio') {
    return (
      <fieldset className="input-wrapper">
        <legend className="input-label">{label}</legend>
        <div className="input-radio-group">
          {options?.map((opt) => (
            <label key={opt} className="input-radio-label">
              <input
                type="radio"
                name={id} // usa l'id come nome per raggruppare le radio
                value={opt}
                onChange={onChange}
                className="input-radio"
                checked={value === opt}
              />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>
    );
  } else {
    // type === 'text'
    return (
      <div className="input-wrapper">
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          type="text"
          className="input-text"
          value={value}
          onChange={onChange}
          placeholder="Scrivi qui..."
        />
      </div>
    );
  }
};

export default Input;