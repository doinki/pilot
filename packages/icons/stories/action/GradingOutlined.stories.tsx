import type { Meta, StoryObj } from '@storybook/react';

import GradingOutlined from '../../lib/action/GradingOutlined';

const meta: Meta<typeof GradingOutlined> = {
  component: GradingOutlined,
  tags: ['autodocs'],
  title: 'action/GradingOutlined',
};

export default meta;
type Story = StoryObj<typeof GradingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
