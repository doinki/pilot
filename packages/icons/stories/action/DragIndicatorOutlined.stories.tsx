import type { Meta, StoryObj } from '@storybook/react';

import DragIndicatorOutlined from '../../lib/action/DragIndicatorOutlined';

const meta: Meta<typeof DragIndicatorOutlined> = {
  component: DragIndicatorOutlined,
  tags: ['autodocs'],
  title: 'action/DragIndicatorOutlined',
};

export default meta;
type Story = StoryObj<typeof DragIndicatorOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
