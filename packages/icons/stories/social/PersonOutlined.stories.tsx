import type { Meta, StoryObj } from '@storybook/react';

import PersonOutlined from '../../lib/social/PersonOutlined';

const meta: Meta<typeof PersonOutlined> = {
  component: PersonOutlined,
  tags: ['autodocs'],
  title: 'social/PersonOutlined',
};

export default meta;
type Story = StoryObj<typeof PersonOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
