import type { Meta, StoryObj } from '@storybook/react';

import PersonOutlineOutlined from '../../lib/social/PersonOutlineOutlined';

const meta: Meta<typeof PersonOutlineOutlined> = {
  component: PersonOutlineOutlined,
  tags: ['autodocs'],
  title: 'social/PersonOutlineOutlined',
};

export default meta;
type Story = StoryObj<typeof PersonOutlineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
