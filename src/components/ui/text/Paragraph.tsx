interface ParagraphProps {
  children: React.ReactNode;
  color: string;
}

export default function Paragraph({ children }: ParagraphProps) {
  return <p className={`text-base`}>{children}</p>;
}
