import type { Meta, StoryObj } from '@storybook/react';

import StarOutlined from '../../lib/toggle/StarOutlined';

const meta: Meta<typeof StarOutlined> = {
  component: StarOutlined,
  tags: ['autodocs'],
  title: 'toggle/StarOutlined',
};

export default meta;
type Story = StoryObj<typeof StarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
