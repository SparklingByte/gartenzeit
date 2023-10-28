type PageTitleProps = {
  title: string;
  subtitle?: string;
};

export default function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <>
      {subtitle && <h2 className='text-big-subheading'>{subtitle}</h2>}
      <h1 className='text-big-heading font-accent'>{title}</h1>
    </>
  );
}
