import type { Meta, StoryObj } from '@storybook/react';

import NetworkLockedOutlined from '../../lib/notification/NetworkLockedOutlined';

const meta: Meta<typeof NetworkLockedOutlined> = {
  component: NetworkLockedOutlined,
  tags: ['autodocs'],
  title: 'notification/NetworkLockedOutlined',
};

export default meta;
type Story = StoryObj<typeof NetworkLockedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
