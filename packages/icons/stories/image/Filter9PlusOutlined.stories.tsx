import type { Meta, StoryObj } from '@storybook/react';

import Filter9PlusOutlined from '../../lib/image/Filter9PlusOutlined';

const meta: Meta<typeof Filter9PlusOutlined> = {
  component: Filter9PlusOutlined,
  tags: ['autodocs'],
  title: 'image/Filter9PlusOutlined',
};

export default meta;
type Story = StoryObj<typeof Filter9PlusOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
