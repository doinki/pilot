import type { Meta, StoryObj } from '@storybook/react';

import BadgeOutlined from '../../lib/maps/BadgeOutlined';

const meta: Meta<typeof BadgeOutlined> = {
  component: BadgeOutlined,
  tags: ['autodocs'],
  title: 'maps/BadgeOutlined',
};

export default meta;
type Story = StoryObj<typeof BadgeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
