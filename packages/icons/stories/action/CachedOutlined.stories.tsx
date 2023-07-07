import type { Meta, StoryObj } from '@storybook/react';

import CachedOutlined from '../../lib/action/CachedOutlined';

const meta: Meta<typeof CachedOutlined> = {
  component: CachedOutlined,
  tags: ['autodocs'],
  title: 'action/CachedOutlined',
};

export default meta;
type Story = StoryObj<typeof CachedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
