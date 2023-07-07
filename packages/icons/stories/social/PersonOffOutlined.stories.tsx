import type { Meta, StoryObj } from '@storybook/react';

import PersonOffOutlined from '../../lib/social/PersonOffOutlined';

const meta: Meta<typeof PersonOffOutlined> = {
  component: PersonOffOutlined,
  tags: ['autodocs'],
  title: 'social/PersonOffOutlined',
};

export default meta;
type Story = StoryObj<typeof PersonOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
