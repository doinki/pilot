import type { Meta, StoryObj } from '@storybook/react';

import MoreHorizOutlined from '../../lib/navigation/MoreHorizOutlined';

const meta: Meta<typeof MoreHorizOutlined> = {
  component: MoreHorizOutlined,
  tags: ['autodocs'],
  title: 'navigation/MoreHorizOutlined',
};

export default meta;
type Story = StoryObj<typeof MoreHorizOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
