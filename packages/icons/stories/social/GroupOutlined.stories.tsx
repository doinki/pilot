import type { Meta, StoryObj } from '@storybook/react';

import GroupOutlined from '../../lib/social/GroupOutlined';

const meta: Meta<typeof GroupOutlined> = {
  component: GroupOutlined,
  tags: ['autodocs'],
  title: 'social/GroupOutlined',
};

export default meta;
type Story = StoryObj<typeof GroupOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
