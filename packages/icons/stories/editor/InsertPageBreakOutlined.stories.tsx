import type { Meta, StoryObj } from '@storybook/react';

import InsertPageBreakOutlined from '../../lib/editor/InsertPageBreakOutlined';

const meta: Meta<typeof InsertPageBreakOutlined> = {
  component: InsertPageBreakOutlined,
  tags: ['autodocs'],
  title: 'editor/InsertPageBreakOutlined',
};

export default meta;
type Story = StoryObj<typeof InsertPageBreakOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
