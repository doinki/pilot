import type { Meta, StoryObj } from '@storybook/react';

import ThumbsUpDownOutlined from '../../lib/action/ThumbsUpDownOutlined';

const meta: Meta<typeof ThumbsUpDownOutlined> = {
  component: ThumbsUpDownOutlined,
  tags: ['autodocs'],
  title: 'action/ThumbsUpDownOutlined',
};

export default meta;
type Story = StoryObj<typeof ThumbsUpDownOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
