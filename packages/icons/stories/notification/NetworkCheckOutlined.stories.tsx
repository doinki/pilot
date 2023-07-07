import type { Meta, StoryObj } from '@storybook/react';

import NetworkCheckOutlined from '../../lib/notification/NetworkCheckOutlined';

const meta: Meta<typeof NetworkCheckOutlined> = {
  component: NetworkCheckOutlined,
  tags: ['autodocs'],
  title: 'notification/NetworkCheckOutlined',
};

export default meta;
type Story = StoryObj<typeof NetworkCheckOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
