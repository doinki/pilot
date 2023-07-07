import type { Meta, StoryObj } from '@storybook/react';

import RemoveOutlined from '../../lib/content/RemoveOutlined';

const meta: Meta<typeof RemoveOutlined> = {
  component: RemoveOutlined,
  tags: ['autodocs'],
  title: 'content/RemoveOutlined',
};

export default meta;
type Story = StoryObj<typeof RemoveOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
