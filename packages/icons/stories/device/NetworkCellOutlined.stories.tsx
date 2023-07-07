import type { Meta, StoryObj } from '@storybook/react';

import NetworkCellOutlined from '../../lib/device/NetworkCellOutlined';

const meta: Meta<typeof NetworkCellOutlined> = {
  component: NetworkCellOutlined,
  tags: ['autodocs'],
  title: 'device/NetworkCellOutlined',
};

export default meta;
type Story = StoryObj<typeof NetworkCellOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
