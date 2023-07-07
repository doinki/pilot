import type { Meta, StoryObj } from '@storybook/react';

import FormatListNumberedRtlOutlined from '../../lib/editor/FormatListNumberedRtlOutlined';

const meta: Meta<typeof FormatListNumberedRtlOutlined> = {
  component: FormatListNumberedRtlOutlined,
  tags: ['autodocs'],
  title: 'editor/FormatListNumberedRtlOutlined',
};

export default meta;
type Story = StoryObj<typeof FormatListNumberedRtlOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
