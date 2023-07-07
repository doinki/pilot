import type { Meta, StoryObj } from '@storybook/react';

import FormatSizeOutlined from '../../lib/editor/FormatSizeOutlined';

const meta: Meta<typeof FormatSizeOutlined> = {
  component: FormatSizeOutlined,
  tags: ['autodocs'],
  title: 'editor/FormatSizeOutlined',
};

export default meta;
type Story = StoryObj<typeof FormatSizeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
