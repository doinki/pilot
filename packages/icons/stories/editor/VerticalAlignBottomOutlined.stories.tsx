import type { Meta, StoryObj } from '@storybook/react';

import VerticalAlignBottomOutlined from '../../lib/editor/VerticalAlignBottomOutlined';

const meta: Meta<typeof VerticalAlignBottomOutlined> = {
  component: VerticalAlignBottomOutlined,
  tags: ['autodocs'],
  title: 'editor/VerticalAlignBottomOutlined',
};

export default meta;
type Story = StoryObj<typeof VerticalAlignBottomOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
