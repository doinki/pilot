import type { Meta, StoryObj } from '@storybook/react';

import NoTransferOutlined from '../../lib/maps/NoTransferOutlined';

const meta: Meta<typeof NoTransferOutlined> = {
  component: NoTransferOutlined,
  tags: ['autodocs'],
  title: 'maps/NoTransferOutlined',
};

export default meta;
type Story = StoryObj<typeof NoTransferOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
