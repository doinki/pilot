import type { Meta, StoryObj } from '@storybook/react';

import SearchOutlined from '../../lib/action/SearchOutlined';

const meta: Meta<typeof SearchOutlined> = {
  component: SearchOutlined,
  tags: ['autodocs'],
  title: 'action/SearchOutlined',
};

export default meta;
type Story = StoryObj<typeof SearchOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
