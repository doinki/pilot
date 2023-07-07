import type { Meta, StoryObj } from '@storybook/react';

import DirectionsCarOutlined from '../../lib/maps/DirectionsCarOutlined';

const meta: Meta<typeof DirectionsCarOutlined> = {
  component: DirectionsCarOutlined,
  tags: ['autodocs'],
  title: 'maps/DirectionsCarOutlined',
};

export default meta;
type Story = StoryObj<typeof DirectionsCarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
