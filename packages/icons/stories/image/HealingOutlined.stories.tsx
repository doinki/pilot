import type { Meta, StoryObj } from '@storybook/react';

import HealingOutlined from '../../lib/image/HealingOutlined';

const meta: Meta<typeof HealingOutlined> = {
  component: HealingOutlined,
  tags: ['autodocs'],
  title: 'image/HealingOutlined',
};

export default meta;
type Story = StoryObj<typeof HealingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
