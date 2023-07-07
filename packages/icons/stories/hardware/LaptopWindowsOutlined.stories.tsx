import type { Meta, StoryObj } from '@storybook/react';

import LaptopWindowsOutlined from '../../lib/hardware/LaptopWindowsOutlined';

const meta: Meta<typeof LaptopWindowsOutlined> = {
  component: LaptopWindowsOutlined,
  tags: ['autodocs'],
  title: 'hardware/LaptopWindowsOutlined',
};

export default meta;
type Story = StoryObj<typeof LaptopWindowsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
