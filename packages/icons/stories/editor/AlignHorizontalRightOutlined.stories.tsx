import type { Meta, StoryObj } from '@storybook/react';

import AlignHorizontalRightOutlined from '../../lib/editor/AlignHorizontalRightOutlined';

const meta: Meta<typeof AlignHorizontalRightOutlined> = {
  component: AlignHorizontalRightOutlined,
  tags: ['autodocs'],
  title: 'editor/AlignHorizontalRightOutlined',
};

export default meta;
type Story = StoryObj<typeof AlignHorizontalRightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
