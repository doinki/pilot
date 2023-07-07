import type { Meta, StoryObj } from '@storybook/react';

import GradientOutlined from '../../lib/image/GradientOutlined';

const meta: Meta<typeof GradientOutlined> = {
  component: GradientOutlined,
  tags: ['autodocs'],
  title: 'image/GradientOutlined',
};

export default meta;
type Story = StoryObj<typeof GradientOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
