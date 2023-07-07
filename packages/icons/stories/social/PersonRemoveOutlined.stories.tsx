import type { Meta, StoryObj } from '@storybook/react';

import PersonRemoveOutlined from '../../lib/social/PersonRemoveOutlined';

const meta: Meta<typeof PersonRemoveOutlined> = {
  component: PersonRemoveOutlined,
  tags: ['autodocs'],
  title: 'social/PersonRemoveOutlined',
};

export default meta;
type Story = StoryObj<typeof PersonRemoveOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
