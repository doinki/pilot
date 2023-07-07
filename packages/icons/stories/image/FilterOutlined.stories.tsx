import type { Meta, StoryObj } from '@storybook/react';

import FilterOutlined from '../../lib/image/FilterOutlined';

const meta: Meta<typeof FilterOutlined> = {
  component: FilterOutlined,
  tags: ['autodocs'],
  title: 'image/FilterOutlined',
};

export default meta;
type Story = StoryObj<typeof FilterOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
