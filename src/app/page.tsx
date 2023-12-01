import { Organization } from '@/models/organization';
import { Avatar, Text, rem } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';
import Link from 'next/link';

export default withPageAuthRequired(async function Home() {
  const user = await getSession();

  const organizationsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/organizations`
  );
  const organizations: Organization[] = await organizationsResponse.json();

  return (
    <div className="h-full flex justify-center items-center text-gray-800 bg-slate-50">
      {organizations.map((organization: any) => (
        <Link
          href={`/organizations/${organization.id}`}
          key={organization.id}
          className="mx-10 shadow-md p-10 bg-white"
        >
          <Avatar
            size="xl,"
            radius="xl"
            src={organization.imageUrl}
            className="mb-2"
          />
          <Text fw={700} size="xl" className="text-center">
            {organization.name}
          </Text>
        </Link>
      ))}
      <Link href="" className="shadow-md p-10 bg-white">
        <Avatar
          size="xl"
          radius="xl"
          src=""
          className="mb-2"
          variant="transparent"
        >
          <IconPlus style={{ width: rem(50), height: rem(50) }} />
        </Avatar>
        <Text fw={700} size="xl" className="text-center">
          Add
        </Text>
      </Link>
    </div>
  );
});
