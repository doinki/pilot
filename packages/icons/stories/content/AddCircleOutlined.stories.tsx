import type { Meta, StoryObj } from '@storybook/react';

import AddCircleOutlined from '../../lib/content/AddCircleOutlined';

const meta: Meta<typeof AddCircleOutlined> = {
  component: AddCircleOutlined,
  tags: ['autodocs'],
  title: 'content/AddCircleOutlined',
};

export default meta;
type Story = StoryObj<typeof AddCircleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
