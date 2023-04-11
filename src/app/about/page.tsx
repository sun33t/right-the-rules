import { Heading } from '~/components/ui/Heading';

export const metadata = {
  title: 'About',
};

export default function About() {
  return (
    <div className="grid h-full place-items-center bg-blue-100">
      <Heading>About Page</Heading>
    </div>
  );
}
