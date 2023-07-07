import type { Meta, StoryObj } from '@storybook/react';

import FactCheckOutlined from '../../lib/action/FactCheckOutlined';

const meta: Meta<typeof FactCheckOutlined> = {
  component: FactCheckOutlined,
  tags: ['autodocs'],
  title: 'action/FactCheckOutlined',
};

export default meta;
type Story = StoryObj<typeof FactCheckOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
