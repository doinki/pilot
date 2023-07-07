import type { Meta, StoryObj } from '@storybook/react';

import ThumbUpAltOutlined from '../../lib/social/ThumbUpAltOutlined';

const meta: Meta<typeof ThumbUpAltOutlined> = {
  component: ThumbUpAltOutlined,
  tags: ['autodocs'],
  title: 'social/ThumbUpAltOutlined',
};

export default meta;
type Story = StoryObj<typeof ThumbUpAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
