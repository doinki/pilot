import type { Meta, StoryObj } from '@storybook/react';

import LaptopMacOutlined from '../../lib/hardware/LaptopMacOutlined';

const meta: Meta<typeof LaptopMacOutlined> = {
  component: LaptopMacOutlined,
  tags: ['autodocs'],
  title: 'hardware/LaptopMacOutlined',
};

export default meta;
type Story = StoryObj<typeof LaptopMacOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
