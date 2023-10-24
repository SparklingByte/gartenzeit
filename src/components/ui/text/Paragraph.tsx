interface ParagraphProps {
  children: React.ReactNode;
  color: string;
}

export default function Paragraph({ color, children }: ParagraphProps) {
  return <p className={`text-base ${color}`}>{children}</p>;
}
