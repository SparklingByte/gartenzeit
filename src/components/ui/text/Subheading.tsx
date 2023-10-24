type SubheadingProps = {
  size: 'big' | 'medium';
  content: string;
};

export default function Subheading({
  size,
  content,
  ...props
}: SubheadingProps) {
  const map = {
    big: (
      <h2
        className='text-2xl'
        {...props}
      >
        {content}
      </h2>
    ),
    medium: (
      <h2
        className='text-xl'
        {...props}
      >
        {content}
      </h2>
    ),
  };

  return map[size] || null;
}
