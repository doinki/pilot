import type { Meta, StoryObj } from '@storybook/react';

import ThumbDownAltOutlined from '../../lib/social/ThumbDownAltOutlined';

const meta: Meta<typeof ThumbDownAltOutlined> = {
  component: ThumbDownAltOutlined,
  tags: ['autodocs'],
  title: 'social/ThumbDownAltOutlined',
};

export default meta;
type Story = StoryObj<typeof ThumbDownAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
