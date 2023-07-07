import type { Meta, StoryObj } from '@storybook/react';

import ReorderOutlined from '../../lib/action/ReorderOutlined';

const meta: Meta<typeof ReorderOutlined> = {
  component: ReorderOutlined,
  tags: ['autodocs'],
  title: 'action/ReorderOutlined',
};

export default meta;
type Story = StoryObj<typeof ReorderOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
