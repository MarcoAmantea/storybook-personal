import React from "react";
import { Meta, Story } from "@storybook/react";
import { typography } from "../Style/Typography";

export default {
  title: "Design System/Typography", // Titolo della story: mostra i vari stili tipografici del design system
  parameters: {
    layout: "centered", // Imposta il layout centrato per la visualizzazione della story
  },
  tags: ["autodocs"],
  docs: {
    description: {
      component:
        "Questa story mostra i vari stili tipografici definiti nel nostro design system e come vengono applicati visivamente. Inoltre, in 'Interactive Typography' puoi modificare interattivamente il testo e la grandezza dei caratteri.", // Descrizione della story
    },
  },
} as Meta;

// Crea un array di coppie [chiave, valore] dai token tipografici definiti in Typography.ts
const typographyEntries = Object.entries(typography);

export const TypographyExamples: Story = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    {/* Per ogni stile tipografico, renderizza un esempio visivo */}
    {typographyEntries.map(([key, style]) => (
      <div key={key} style={{ textAlign: "center" }}>
        <p style={{ ...(style as React.CSSProperties), margin: "0" }}>
          {`Questo è il formato: ${key}`}
        </p>
      </div>
    ))}
  </div>
);

// Story interattiva per modificare testo e proprietà tipografiche
export const InteractiveTypography: Story = (args) => (
  <div style={{ padding: "20px" }}>
    <p
      style={{
        fontSize: args.fontSize,
        fontFamily: args.fontFamily,
        fontWeight: args.fontWeight,
        lineHeight: args.lineHeight,
        margin: 0,
      }}
    >
      {args.text}
    </p>
  </div>
);

InteractiveTypography.args = {
  text: "Questo è un esempio interattivo",
  fontSize: "16px",
  fontFamily: '"Roboto", sans-serif',
  fontWeight: 400,
  lineHeight: "24px",
};

InteractiveTypography.argTypes = {
  text: { control: "text", description: "Testo da visualizzare" },
  fontSize: { control: "text", description: "Dimensione del carattere (es. 16px)" },
  fontFamily: { control: "text", description: "Famiglia del carattere" },
  fontWeight: { control: "number", description: "Peso del font (es. 400, 700)" },
  lineHeight: { control: "text", description: "Altezza della linea (es. 24px)" },
};