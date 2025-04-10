import { Meta, Story } from "@storybook/react";
import { Badge, BadgeProps } from "../Style/Badge";

export default {
  title: "Design System/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  args: {
    text: "Badge",
  },
  argTypes: {
    text: { control: "text" },
    variant: {
      control: { type: "select" },
      options: ["Default", "Invertito", "Positivo"],
    },
  },
} as Meta<BadgeProps>;

// Story con tutti i badge (con contrasto migliorato)
export const AllBadges: Story<BadgeProps> = (args) => {
  const badgeColors = [
    { name: "Primary", background: "black", text: "#ffffff" },
    { name: "Danger", background: "#b71c1c", text: "#ffffff" },
    { name: "Warning", background: "#ffc107", text: "#000000" }, // migliorato!
    { name: "Info", background: "#0d47a1", text: "#ffffff" },    // migliorato!
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        justifyContent: "center",
      }}
    >
      {badgeColors.map((badge, index) => (
        <Badge
          key={index}
          text={args.text}
          backgroundColor={badge.background}
          textColor={badge.text}
        />
      ))}
    </div>
  );
};

AllBadges.args = {
  text: "Badge",
};

// Varianti dinamiche con miglior contrasto
export const BadgeVariants: Story<BadgeProps> = (args) => {
  const variantMap: Record<string, { background: string; text: string }> = {
    Default: { background: "#0070f3", text: "#ffffff" },
    Invertito: { background: "#ffffff", text: "#0070f3" },
    Positivo: { background: "#28a745", text: "#ffffff" },
  };

  const { background, text } =
    variantMap[args.variant as keyof typeof variantMap] || variantMap.Default;

  return (
    <Badge
      text={args.text}
      backgroundColor={background}
      textColor={text}
    />
  );
};

BadgeVariants.args = {
  text: "Badge",
  variant: "Default",
};
