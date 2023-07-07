import type { Meta, StoryObj } from '@storybook/react';

import DragHandleOutlined from '../../lib/editor/DragHandleOutlined';

const meta: Meta<typeof DragHandleOutlined> = {
  component: DragHandleOutlined,
  tags: ['autodocs'],
  title: 'editor/DragHandleOutlined',
};

export default meta;
type Story = StoryObj<typeof DragHandleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
