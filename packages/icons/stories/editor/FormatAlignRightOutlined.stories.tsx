import type { Meta, StoryObj } from '@storybook/react';

import FormatAlignRightOutlined from '../../lib/editor/FormatAlignRightOutlined';

const meta: Meta<typeof FormatAlignRightOutlined> = {
  component: FormatAlignRightOutlined,
  tags: ['autodocs'],
  title: 'editor/FormatAlignRightOutlined',
};

export default meta;
type Story = StoryObj<typeof FormatAlignRightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
