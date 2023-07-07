import type { Meta, StoryObj } from '@storybook/react';

import SavingsOutlined from '../../lib/action/SavingsOutlined';

const meta: Meta<typeof SavingsOutlined> = {
  component: SavingsOutlined,
  tags: ['autodocs'],
  title: 'action/SavingsOutlined',
};

export default meta;
type Story = StoryObj<typeof SavingsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
