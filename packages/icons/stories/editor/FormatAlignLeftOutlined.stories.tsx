import type { Meta, StoryObj } from '@storybook/react';

import FormatAlignLeftOutlined from '../../lib/editor/FormatAlignLeftOutlined';

const meta: Meta<typeof FormatAlignLeftOutlined> = {
  component: FormatAlignLeftOutlined,
  tags: ['autodocs'],
  title: 'editor/FormatAlignLeftOutlined',
};

export default meta;
type Story = StoryObj<typeof FormatAlignLeftOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
