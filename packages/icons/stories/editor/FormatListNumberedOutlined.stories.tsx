import type { Meta, StoryObj } from '@storybook/react';

import FormatListNumberedOutlined from '../../lib/editor/FormatListNumberedOutlined';

const meta: Meta<typeof FormatListNumberedOutlined> = {
  component: FormatListNumberedOutlined,
  tags: ['autodocs'],
  title: 'editor/FormatListNumberedOutlined',
};

export default meta;
type Story = StoryObj<typeof FormatListNumberedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
