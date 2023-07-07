import type { Meta, StoryObj } from '@storybook/react';

import DataSaverOffOutlined from '../../lib/device/DataSaverOffOutlined';

const meta: Meta<typeof DataSaverOffOutlined> = {
  component: DataSaverOffOutlined,
  tags: ['autodocs'],
  title: 'device/DataSaverOffOutlined',
};

export default meta;
type Story = StoryObj<typeof DataSaverOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
