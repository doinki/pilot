import type { Meta, StoryObj } from '@storybook/react';

import ClassOutlined from '../../lib/action/ClassOutlined';

const meta: Meta<typeof ClassOutlined> = {
  component: ClassOutlined,
  tags: ['autodocs'],
  title: 'action/ClassOutlined',
};

export default meta;
type Story = StoryObj<typeof ClassOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
