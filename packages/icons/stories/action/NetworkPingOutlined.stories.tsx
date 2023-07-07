import type { Meta, StoryObj } from '@storybook/react';

import NetworkPingOutlined from '../../lib/action/NetworkPingOutlined';

const meta: Meta<typeof NetworkPingOutlined> = {
  component: NetworkPingOutlined,
  tags: ['autodocs'],
  title: 'action/NetworkPingOutlined',
};

export default meta;
type Story = StoryObj<typeof NetworkPingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
