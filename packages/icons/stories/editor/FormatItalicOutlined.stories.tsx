import type { Meta, StoryObj } from '@storybook/react';

import FormatItalicOutlined from '../../lib/editor/FormatItalicOutlined';

const meta: Meta<typeof FormatItalicOutlined> = {
  component: FormatItalicOutlined,
  tags: ['autodocs'],
  title: 'editor/FormatItalicOutlined',
};

export default meta;
type Story = StoryObj<typeof FormatItalicOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
