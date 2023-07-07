import type { Meta, StoryObj } from '@storybook/react';

import ComputerOutlined from '../../lib/hardware/ComputerOutlined';

const meta: Meta<typeof ComputerOutlined> = {
  component: ComputerOutlined,
  tags: ['autodocs'],
  title: 'hardware/ComputerOutlined',
};

export default meta;
type Story = StoryObj<typeof ComputerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
