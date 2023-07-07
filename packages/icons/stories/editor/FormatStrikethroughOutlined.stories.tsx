import type { Meta, StoryObj } from '@storybook/react';

import FormatStrikethroughOutlined from '../../lib/editor/FormatStrikethroughOutlined';

const meta: Meta<typeof FormatStrikethroughOutlined> = {
  component: FormatStrikethroughOutlined,
  tags: ['autodocs'],
  title: 'editor/FormatStrikethroughOutlined',
};

export default meta;
type Story = StoryObj<typeof FormatStrikethroughOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
