import type { Meta, StoryObj } from '@storybook/react';

import PublicOutlined from '../../lib/social/PublicOutlined';

const meta: Meta<typeof PublicOutlined> = {
  component: PublicOutlined,
  tags: ['autodocs'],
  title: 'social/PublicOutlined',
};

export default meta;
type Story = StoryObj<typeof PublicOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
