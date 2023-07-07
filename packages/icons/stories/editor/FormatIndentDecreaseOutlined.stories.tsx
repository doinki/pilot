import type { Meta, StoryObj } from '@storybook/react';

import FormatIndentDecreaseOutlined from '../../lib/editor/FormatIndentDecreaseOutlined';

const meta: Meta<typeof FormatIndentDecreaseOutlined> = {
  component: FormatIndentDecreaseOutlined,
  tags: ['autodocs'],
  title: 'editor/FormatIndentDecreaseOutlined',
};

export default meta;
type Story = StoryObj<typeof FormatIndentDecreaseOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
