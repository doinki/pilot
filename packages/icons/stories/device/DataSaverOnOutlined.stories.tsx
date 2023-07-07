import type { Meta, StoryObj } from '@storybook/react';

import DataSaverOnOutlined from '../../lib/device/DataSaverOnOutlined';

const meta: Meta<typeof DataSaverOnOutlined> = {
  component: DataSaverOnOutlined,
  tags: ['autodocs'],
  title: 'device/DataSaverOnOutlined',
};

export default meta;
type Story = StoryObj<typeof DataSaverOnOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
