import type { Meta, StoryObj } from '@storybook/react';

import CreateOutlined from '../../lib/content/CreateOutlined';

const meta: Meta<typeof CreateOutlined> = {
  component: CreateOutlined,
  tags: ['autodocs'],
  title: 'content/CreateOutlined',
};

export default meta;
type Story = StoryObj<typeof CreateOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
