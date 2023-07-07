import type { Meta, StoryObj } from '@storybook/react';

import StorageOutlined from '../../lib/device/StorageOutlined';

const meta: Meta<typeof StorageOutlined> = {
  component: StorageOutlined,
  tags: ['autodocs'],
  title: 'device/StorageOutlined',
};

export default meta;
type Story = StoryObj<typeof StorageOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
