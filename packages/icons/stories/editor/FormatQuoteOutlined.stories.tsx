import type { Meta, StoryObj } from '@storybook/react';

import FormatQuoteOutlined from '../../lib/editor/FormatQuoteOutlined';

const meta: Meta<typeof FormatQuoteOutlined> = {
  component: FormatQuoteOutlined,
  tags: ['autodocs'],
  title: 'editor/FormatQuoteOutlined',
};

export default meta;
type Story = StoryObj<typeof FormatQuoteOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
