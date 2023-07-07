import type { Meta, StoryObj } from '@storybook/react';

import FilterListOutlined from '../../lib/content/FilterListOutlined';

const meta: Meta<typeof FilterListOutlined> = {
  component: FilterListOutlined,
  tags: ['autodocs'],
  title: 'content/FilterListOutlined',
};

export default meta;
type Story = StoryObj<typeof FilterListOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
