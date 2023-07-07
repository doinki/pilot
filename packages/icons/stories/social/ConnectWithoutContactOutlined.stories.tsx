import type { Meta, StoryObj } from '@storybook/react';

import ConnectWithoutContactOutlined from '../../lib/social/ConnectWithoutContactOutlined';

const meta: Meta<typeof ConnectWithoutContactOutlined> = {
  component: ConnectWithoutContactOutlined,
  tags: ['autodocs'],
  title: 'social/ConnectWithoutContactOutlined',
};

export default meta;
type Story = StoryObj<typeof ConnectWithoutContactOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
