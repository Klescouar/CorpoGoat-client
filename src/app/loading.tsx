import { Loader } from '@mantine/core';

export default function Loading() {
  return (
    <div className="h-full flex justify-center items-center">
      <Loader color="blue" size="lg" type="bars" />
    </div>
  );
}
