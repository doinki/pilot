import type { Meta, StoryObj } from '@storybook/react';

import LaptopOutlined from '../../lib/hardware/LaptopOutlined';

const meta: Meta<typeof LaptopOutlined> = {
  component: LaptopOutlined,
  tags: ['autodocs'],
  title: 'hardware/LaptopOutlined',
};

export default meta;
type Story = StoryObj<typeof LaptopOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
