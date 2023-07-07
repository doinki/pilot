import type { Meta, StoryObj } from '@storybook/react';

import FormatColorFillOutlined from '../../lib/editor/FormatColorFillOutlined';

const meta: Meta<typeof FormatColorFillOutlined> = {
  component: FormatColorFillOutlined,
  tags: ['autodocs'],
  title: 'editor/FormatColorFillOutlined',
};

export default meta;
type Story = StoryObj<typeof FormatColorFillOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
