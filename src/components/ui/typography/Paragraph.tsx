interface ParagraphProps {
  content: string;
}

export default function Paragraph({ content }: ParagraphProps) {
  return <p className={`text-base`}>{content}</p>;
}
