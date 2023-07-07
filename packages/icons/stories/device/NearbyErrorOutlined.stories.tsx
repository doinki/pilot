import type { Meta, StoryObj } from '@storybook/react';

import NearbyErrorOutlined from '../../lib/device/NearbyErrorOutlined';

const meta: Meta<typeof NearbyErrorOutlined> = {
  component: NearbyErrorOutlined,
  tags: ['autodocs'],
  title: 'device/NearbyErrorOutlined',
};

export default meta;
type Story = StoryObj<typeof NearbyErrorOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
