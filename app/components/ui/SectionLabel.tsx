interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold uppercase tracking-widest mb-3 ${
        light ? "text-accent" : "text-accent"
      }`}
    >
      {children}
    </span>
  );
}
