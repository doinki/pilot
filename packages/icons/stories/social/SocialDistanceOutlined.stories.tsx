import type { Meta, StoryObj } from '@storybook/react';

import SocialDistanceOutlined from '../../lib/social/SocialDistanceOutlined';

const meta: Meta<typeof SocialDistanceOutlined> = {
  component: SocialDistanceOutlined,
  tags: ['autodocs'],
  title: 'social/SocialDistanceOutlined',
};

export default meta;
type Story = StoryObj<typeof SocialDistanceOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
