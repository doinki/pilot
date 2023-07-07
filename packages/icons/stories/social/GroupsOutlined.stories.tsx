import type { Meta, StoryObj } from '@storybook/react';

import GroupsOutlined from '../../lib/social/GroupsOutlined';

const meta: Meta<typeof GroupsOutlined> = {
  component: GroupsOutlined,
  tags: ['autodocs'],
  title: 'social/GroupsOutlined',
};

export default meta;
type Story = StoryObj<typeof GroupsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
