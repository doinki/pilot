import type { Meta, StoryObj } from '@storybook/react';

import PersonAddOutlined from '../../lib/social/PersonAddOutlined';

const meta: Meta<typeof PersonAddOutlined> = {
  component: PersonAddOutlined,
  tags: ['autodocs'],
  title: 'social/PersonAddOutlined',
};

export default meta;
type Story = StoryObj<typeof PersonAddOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
