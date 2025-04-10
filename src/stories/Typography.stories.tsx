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
        "Questa story mostra i vari stili tipografici definiti nel nostro design system e come vengono applicati visivamente.", // Descrizione della story
    },
  },
} as Meta;

// Crea un array di coppie [chiave, valore] dai token tipografici definiti in Typography.ts
const typographyEntries = Object.entries(typography);

export const TypographyExamples: Story = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    {/* Per ogni stile tipografico, renderizza un esempio visivo e mostra le proprietà in formato JSON */}
    {typographyEntries.map(([key, style]) => (
      <div key={key} style={{ textAlign: "center" }}>
        <p style={{ ...(style as React.CSSProperties), margin: "0" }}>
        {`Questo è il formato: ${key}`}
        </p>
      </div>
    ))}
  </div>
);
