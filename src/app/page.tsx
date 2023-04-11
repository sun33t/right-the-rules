import { Heading } from '~/components/ui/Heading';

export const metadata = {
  title: {
    absolute: 'Home | Right the Rules',
  },
};

export default function Home() {
  return (
    <div className="grid h-full place-items-center bg-blue-100">
      <Heading>Main Page</Heading>
    </div>
  );
}
