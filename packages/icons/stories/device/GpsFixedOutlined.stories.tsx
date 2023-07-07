import type { Meta, StoryObj } from '@storybook/react';

import GpsFixedOutlined from '../../lib/device/GpsFixedOutlined';

const meta: Meta<typeof GpsFixedOutlined> = {
  component: GpsFixedOutlined,
  tags: ['autodocs'],
  title: 'device/GpsFixedOutlined',
};

export default meta;
type Story = StoryObj<typeof GpsFixedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
