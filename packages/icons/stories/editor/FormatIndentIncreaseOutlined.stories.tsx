import type { Meta, StoryObj } from '@storybook/react';

import FormatIndentIncreaseOutlined from '../../lib/editor/FormatIndentIncreaseOutlined';

const meta: Meta<typeof FormatIndentIncreaseOutlined> = {
  component: FormatIndentIncreaseOutlined,
  tags: ['autodocs'],
  title: 'editor/FormatIndentIncreaseOutlined',
};

export default meta;
type Story = StoryObj<typeof FormatIndentIncreaseOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
