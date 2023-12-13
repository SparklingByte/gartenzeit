import Button from '@/components/buttons/Button';
import { Heading, Subheading } from '@/components/typography/Typography';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className='flex flex-col h-screen justify-center items-center'>
      <span className='text-huge-heading'>{':('}</span>
      <Heading size='big'>This harvest does not exist</Heading>
      <div className='max-w-4xl text-center'>
        <Subheading size='big'>
          Maybe, I has been deleted or you have a typo in the URL (which is
          quite hard to write correctly). Check out other harvests on the
          discovery page.
        </Subheading>
      </div>
      <Link className='mt-10' href='/discover'>
        <Button
          color='primary'
          showIcon={false}
          text='Discover other harvests'
        ></Button>
      </Link>
    </main>
  );
}
