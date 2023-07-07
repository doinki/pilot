import type { Meta, StoryObj } from '@storybook/react';

import FireplaceOutlined from '../../lib/social/FireplaceOutlined';

const meta: Meta<typeof FireplaceOutlined> = {
  component: FireplaceOutlined,
  tags: ['autodocs'],
  title: 'social/FireplaceOutlined',
};

export default meta;
type Story = StoryObj<typeof FireplaceOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
