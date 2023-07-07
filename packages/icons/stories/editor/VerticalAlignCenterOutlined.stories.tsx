import type { Meta, StoryObj } from '@storybook/react';

import VerticalAlignCenterOutlined from '../../lib/editor/VerticalAlignCenterOutlined';

const meta: Meta<typeof VerticalAlignCenterOutlined> = {
  component: VerticalAlignCenterOutlined,
  tags: ['autodocs'],
  title: 'editor/VerticalAlignCenterOutlined',
};

export default meta;
type Story = StoryObj<typeof VerticalAlignCenterOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
