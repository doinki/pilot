import type { Meta, StoryObj } from '@storybook/react';

import FormatAlignJustifyOutlined from '../../lib/editor/FormatAlignJustifyOutlined';

const meta: Meta<typeof FormatAlignJustifyOutlined> = {
  component: FormatAlignJustifyOutlined,
  tags: ['autodocs'],
  title: 'editor/FormatAlignJustifyOutlined',
};

export default meta;
type Story = StoryObj<typeof FormatAlignJustifyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
