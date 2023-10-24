interface HeadingProps {
  size: 'huge' | 'big' | 'medium' | 'small';
  content: string;
}

export default function Heading({ size, content }: HeadingProps) {
  const map = {
    huge: <h1 className='text-3xl font-bold'>{content}</h1>,
    big: <h2 className='text-2xl font-bold'>{content}</h2>,
    medium: <h3 className='text-xl font-bold'>{content}</h3>,
    small: <h4 className='text-lg font-bold'>{content}</h4>,
  };

  return map[size] || null;
}
