import type { Meta, StoryObj } from '@storybook/react';

import FormatPaintOutlined from '../../lib/editor/FormatPaintOutlined';

const meta: Meta<typeof FormatPaintOutlined> = {
  component: FormatPaintOutlined,
  tags: ['autodocs'],
  title: 'editor/FormatPaintOutlined',
};

export default meta;
type Story = StoryObj<typeof FormatPaintOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
