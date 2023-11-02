type TypographyProps = {
  children: React.ReactNode | string;
};

type HeadingSizes = 'huge' | 'big' | 'medium' | 'small';

type HeadingProps = {
  size: HeadingSizes;
} & TypographyProps;

type SubheadingSizes = 'big' | 'medium';

type SubheadingProps = {
  size: SubheadingSizes;
} & TypographyProps;

// No additional props yet
type ParagraphProps = {} & TypographyProps;

export function Heading({ children, size, ...props }: HeadingProps) {
  const sizeMap: { [key in HeadingSizes]: React.ReactNode } = {
    huge: (
      <h1
        className='text-huge-heading font-accent font-bold'
        {...props}
      >
        {children}
      </h1>
    ),
    big: (
      <h2
        className='text-big-heading font-accent font-bold'
        {...props}
      >
        {children}
      </h2>
    ),
    medium: (
      <h4
        className='text-medium-heading font-bold'
        {...props}
      >
        {children}
      </h4>
    ),
    small: (
      <h6
        className='text-small-heading font-bold'
        {...props}
      >
        {children}
      </h6>
    ),
  };

  return sizeMap[size];
}

export function Subheading({ children, size, ...props }: SubheadingProps) {
  const sizeMap: { [key in SubheadingSizes]: React.ReactNode } = {
    big: (
      <h3
        className='text-big-subheading font-bold'
        {...props}
      >
        {children}
      </h3>
    ),
    medium: (
      <h5
        className='text-medium-subheading font-bold'
        {...props}
      >
        {children}
      </h5>
    ),
  };

  return sizeMap[size];
}

export function Paragraph({ children }: ParagraphProps) {
  return <p className='text-base'>{children}</p>;
}
