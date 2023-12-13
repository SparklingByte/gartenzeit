import Button from '@/components/buttons/Button';
import { Heading, Subheading } from '@/components/typography/Typography';
import Link from 'next/link';

export default function Custom404() {
  return (
    <main className='flex flex-col h-screen w-screen justify-center items-center'>
      <span className='text-huge-heading'>{':('}</span>
      <Heading size='big'>This page was not found</Heading>
      <Subheading size='big'>
        Try another page or go back to the homepage.
      </Subheading>
      <Link className='mt-10' href='/'>
        <Button color='primary' showIcon={false} text='Go to homepage'></Button>
      </Link>
    </main>
  );
}
