import type { Meta, StoryObj } from '@storybook/react';

import RemoveCircleOutlined from '../../lib/content/RemoveCircleOutlined';

const meta: Meta<typeof RemoveCircleOutlined> = {
  component: RemoveCircleOutlined,
  tags: ['autodocs'],
  title: 'content/RemoveCircleOutlined',
};

export default meta;
type Story = StoryObj<typeof RemoveCircleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
