import { ComponentProps } from 'react';

type HeadingProps = Omit<ComponentProps<'h1'>, 'className'>;
export const Heading = ({ children, ...restOfProps }: HeadingProps) => {
  return (
    <h1 className="text-3xl font-bold" {...restOfProps}>
      {children}
    </h1>
  );
};
