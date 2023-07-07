import type { Meta, StoryObj } from '@storybook/react';

import PublicOffOutlined from '../../lib/social/PublicOffOutlined';

const meta: Meta<typeof PublicOffOutlined> = {
  component: PublicOffOutlined,
  tags: ['autodocs'],
  title: 'social/PublicOffOutlined',
};

export default meta;
type Story = StoryObj<typeof PublicOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
