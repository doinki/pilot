import type { Meta, StoryObj } from '@storybook/react';

import ListOutlined from '../../lib/action/ListOutlined';

const meta: Meta<typeof ListOutlined> = {
  component: ListOutlined,
  tags: ['autodocs'],
  title: 'action/ListOutlined',
};

export default meta;
type Story = StoryObj<typeof ListOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
