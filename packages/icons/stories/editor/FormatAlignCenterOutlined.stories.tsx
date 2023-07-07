import type { Meta, StoryObj } from '@storybook/react';

import FormatAlignCenterOutlined from '../../lib/editor/FormatAlignCenterOutlined';

const meta: Meta<typeof FormatAlignCenterOutlined> = {
  component: FormatAlignCenterOutlined,
  tags: ['autodocs'],
  title: 'editor/FormatAlignCenterOutlined',
};

export default meta;
type Story = StoryObj<typeof FormatAlignCenterOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
