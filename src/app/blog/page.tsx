import { Heading } from '~/components/ui/Heading';

export const metadata = {
  title: 'Blog',
};

export default function Blog() {
  return (
    <div className="grid h-full place-items-center bg-blue-100">
      <Heading>Blog Page</Heading>
    </div>
  );
}
