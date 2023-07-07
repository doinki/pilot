import type { Meta, StoryObj } from '@storybook/react';

import SearchOffOutlined from '../../lib/action/SearchOffOutlined';

const meta: Meta<typeof SearchOffOutlined> = {
  component: SearchOffOutlined,
  tags: ['autodocs'],
  title: 'action/SearchOffOutlined',
};

export default meta;
type Story = StoryObj<typeof SearchOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
