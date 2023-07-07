import type { Meta, StoryObj } from '@storybook/react';

import VerticalAlignTopOutlined from '../../lib/editor/VerticalAlignTopOutlined';

const meta: Meta<typeof VerticalAlignTopOutlined> = {
  component: VerticalAlignTopOutlined,
  tags: ['autodocs'],
  title: 'editor/VerticalAlignTopOutlined',
};

export default meta;
type Story = StoryObj<typeof VerticalAlignTopOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
