import type { Meta, StoryObj } from '@storybook/react';

import ThumbDownOutlined from '../../lib/action/ThumbDownOutlined';

const meta: Meta<typeof ThumbDownOutlined> = {
  component: ThumbDownOutlined,
  tags: ['autodocs'],
  title: 'action/ThumbDownOutlined',
};

export default meta;
type Story = StoryObj<typeof ThumbDownOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
