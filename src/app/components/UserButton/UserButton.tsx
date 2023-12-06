import React from 'react';
import { UnstyledButton, Group, Avatar, Text, rem } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { getSession } from '@auth0/nextjs-auth0';

export async function UserButton() {
  const session = await getSession();

  return (
    <UnstyledButton className="block w-full text-white">
      <Group>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
          radius="xl"
        />

        <div className="w-2/3">
          <Text size="sm" fw={500} className="text-ellipsis overflow-hidden">
            {session?.user.name}
          </Text>

          <Text c="dimmed" size="xs" className="text-ellipsis overflow-hidden">
            {session?.user.email}
          </Text>
        </div>

        <IconChevronRight
          style={{ width: rem(14), height: rem(14) }}
          stroke={1.5}
        />
      </Group>
    </UnstyledButton>
  );
}
