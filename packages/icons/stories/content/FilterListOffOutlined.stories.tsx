import type { Meta, StoryObj } from '@storybook/react';

import FilterListOffOutlined from '../../lib/content/FilterListOffOutlined';

const meta: Meta<typeof FilterListOffOutlined> = {
  component: FilterListOffOutlined,
  tags: ['autodocs'],
  title: 'content/FilterListOffOutlined',
};

export default meta;
type Story = StoryObj<typeof FilterListOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
