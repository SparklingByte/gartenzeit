interface HeadingProps {
  size: 'page' | 'big' | 'medium' | 'small';
  content: string;
}

export default function Heading({ size, content }: HeadingProps) {
  switch (size) {
    case 'page':
      return <h1 className='text-3xl font-bold'>{content}</h1>;
    case 'big':
      return <h2 className='text-xl font-bold'>{content}</h2>;
    case 'medium':
      return <h3 className='text-lg font-bold'>{content}</h3>;
    case 'small':
      return <h4 className='text-base font-bold'>{content}</h4>;
  }
}
