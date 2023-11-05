import { Heading, Paragraph } from '../../typography/Typography';

type CalloutBoxProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export default function CalloutBox({
  title,
  description,
  children,
}: CalloutBoxProps) {
  return (
    <div className='grid gap-5 p-5 rounded-xl bg-background-100 text-center'>
      <Heading size='small'>{title}</Heading>
      <Paragraph>{description}</Paragraph>
      <div className='w-fit m-auto'>{children}</div>
    </div>
  );
}
