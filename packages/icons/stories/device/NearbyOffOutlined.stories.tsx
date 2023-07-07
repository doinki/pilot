import type { Meta, StoryObj } from '@storybook/react';

import NearbyOffOutlined from '../../lib/device/NearbyOffOutlined';

const meta: Meta<typeof NearbyOffOutlined> = {
  component: NearbyOffOutlined,
  tags: ['autodocs'],
  title: 'device/NearbyOffOutlined',
};

export default meta;
type Story = StoryObj<typeof NearbyOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
