import type { Meta, StoryObj } from '@storybook/react';

import GpsOffOutlined from '../../lib/device/GpsOffOutlined';

const meta: Meta<typeof GpsOffOutlined> = {
  component: GpsOffOutlined,
  tags: ['autodocs'],
  title: 'device/GpsOffOutlined',
};

export default meta;
type Story = StoryObj<typeof GpsOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
