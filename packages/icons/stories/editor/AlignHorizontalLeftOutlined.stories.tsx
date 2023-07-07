import type { Meta, StoryObj } from '@storybook/react';

import AlignHorizontalLeftOutlined from '../../lib/editor/AlignHorizontalLeftOutlined';

const meta: Meta<typeof AlignHorizontalLeftOutlined> = {
  component: AlignHorizontalLeftOutlined,
  tags: ['autodocs'],
  title: 'editor/AlignHorizontalLeftOutlined',
};

export default meta;
type Story = StoryObj<typeof AlignHorizontalLeftOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
