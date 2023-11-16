import Link from 'next/link';

type SectionTitleProps = {
  title: string;
  helperText?: string;
  linkText?: string;
  linkPathname?: string;
};

export default function SectionTitle({
  title,
  helperText,
  linkText,
  linkPathname,
}: SectionTitleProps) {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='text-text-100 text-medium-heading font-bold'>{title}</h2>
        {linkText && (
          <Link href={linkPathname || ''}>
            <p className='text-text-80 cursor-pointer'>{linkText + ' >'}</p>
          </Link>
        )}
      </div>
      {helperText && (
        <p className='text-text-80 text-medium-subheading'>{helperText}</p>
      )}
    </div>
  );
}
