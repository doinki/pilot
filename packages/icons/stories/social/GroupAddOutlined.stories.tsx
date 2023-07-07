import type { Meta, StoryObj } from '@storybook/react';

import GroupAddOutlined from '../../lib/social/GroupAddOutlined';

const meta: Meta<typeof GroupAddOutlined> = {
  component: GroupAddOutlined,
  tags: ['autodocs'],
  title: 'social/GroupAddOutlined',
};

export default meta;
type Story = StoryObj<typeof GroupAddOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
