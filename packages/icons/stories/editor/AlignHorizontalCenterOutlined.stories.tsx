import type { Meta, StoryObj } from '@storybook/react';

import AlignHorizontalCenterOutlined from '../../lib/editor/AlignHorizontalCenterOutlined';

const meta: Meta<typeof AlignHorizontalCenterOutlined> = {
  component: AlignHorizontalCenterOutlined,
  tags: ['autodocs'],
  title: 'editor/AlignHorizontalCenterOutlined',
};

export default meta;
type Story = StoryObj<typeof AlignHorizontalCenterOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
