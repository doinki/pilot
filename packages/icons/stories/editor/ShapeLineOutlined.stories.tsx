import type { Meta, StoryObj } from '@storybook/react';

import ShapeLineOutlined from '../../lib/editor/ShapeLineOutlined';

const meta: Meta<typeof ShapeLineOutlined> = {
  component: ShapeLineOutlined,
  tags: ['autodocs'],
  title: 'editor/ShapeLineOutlined',
};

export default meta;
type Story = StoryObj<typeof ShapeLineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
