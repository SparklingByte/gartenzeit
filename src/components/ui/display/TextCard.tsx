interface TextCardProps {
  title: string;
  text: string;
  children?: React.ReactNode;
}

export default function TextCard({ title, text, children }: TextCardProps) {
  return (
    <article className='p-5 bg-background-100 rounded-xl'>
      <h4 className='mb-3 text-text-100 text-small-heading font-bold'>
        {title}
      </h4>
      <p className='text-text-80 text-base'>{text}</p>
      {children}
    </article>
  );
}
