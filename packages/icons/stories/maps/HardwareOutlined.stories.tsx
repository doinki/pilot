import type { Meta, StoryObj } from '@storybook/react';

import HardwareOutlined from '../../lib/maps/HardwareOutlined';

const meta: Meta<typeof HardwareOutlined> = {
  component: HardwareOutlined,
  tags: ['autodocs'],
  title: 'maps/HardwareOutlined',
};

export default meta;
type Story = StoryObj<typeof HardwareOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
