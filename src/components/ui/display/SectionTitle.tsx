type SectionTitleProps = {
  title: string;
  helperText?: string;
  linkText?: string;
  onOpen?: () => void;
};

export default function SectionTitle({
  title,
  helperText,
  linkText,
  onOpen,
}: SectionTitleProps) {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='text-text-100 text-medium-heading font-bold'>{title}</h2>
        {linkText && (
          <p
            className='text-text-80 cursor-pointer'
            onClick={onOpen || function () {}}
          >
            {linkText + ' >'}
          </p>
        )}
      </div>
      {helperText && (
        <p className='text-text-80 text-medium-subheading'>{helperText}</p>
      )}
    </div>
  );
}
