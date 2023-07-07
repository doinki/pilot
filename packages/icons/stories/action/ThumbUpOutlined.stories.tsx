import type { Meta, StoryObj } from '@storybook/react';

import ThumbUpOutlined from '../../lib/action/ThumbUpOutlined';

const meta: Meta<typeof ThumbUpOutlined> = {
  component: ThumbUpOutlined,
  tags: ['autodocs'],
  title: 'action/ThumbUpOutlined',
};

export default meta;
type Story = StoryObj<typeof ThumbUpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
