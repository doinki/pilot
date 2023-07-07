import type { Meta, StoryObj } from '@storybook/react';

import NoiseControlOffOutlined from '../../lib/action/NoiseControlOffOutlined';

const meta: Meta<typeof NoiseControlOffOutlined> = {
  component: NoiseControlOffOutlined,
  tags: ['autodocs'],
  title: 'action/NoiseControlOffOutlined',
};

export default meta;
type Story = StoryObj<typeof NoiseControlOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
