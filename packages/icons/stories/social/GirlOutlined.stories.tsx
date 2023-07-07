import type { Meta, StoryObj } from '@storybook/react';

import GirlOutlined from '../../lib/social/GirlOutlined';

const meta: Meta<typeof GirlOutlined> = {
  component: GirlOutlined,
  tags: ['autodocs'],
  title: 'social/GirlOutlined',
};

export default meta;
type Story = StoryObj<typeof GirlOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
