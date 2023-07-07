import type { Meta, StoryObj } from '@storybook/react';

import BrushOutlined from '../../lib/image/BrushOutlined';

const meta: Meta<typeof BrushOutlined> = {
  component: BrushOutlined,
  tags: ['autodocs'],
  title: 'image/BrushOutlined',
};

export default meta;
type Story = StoryObj<typeof BrushOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
