import type { Meta, StoryObj } from '@storybook/react';

import HiveOutlined from '../../lib/social/HiveOutlined';

const meta: Meta<typeof HiveOutlined> = {
  component: HiveOutlined,
  tags: ['autodocs'],
  title: 'social/HiveOutlined',
};

export default meta;
type Story = StoryObj<typeof HiveOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
