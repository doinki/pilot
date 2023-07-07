import type { Meta, StoryObj } from '@storybook/react';

import AlignVerticalTopOutlined from '../../lib/editor/AlignVerticalTopOutlined';

const meta: Meta<typeof AlignVerticalTopOutlined> = {
  component: AlignVerticalTopOutlined,
  tags: ['autodocs'],
  title: 'editor/AlignVerticalTopOutlined',
};

export default meta;
type Story = StoryObj<typeof AlignVerticalTopOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
