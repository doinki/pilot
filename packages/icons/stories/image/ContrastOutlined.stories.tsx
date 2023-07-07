import type { Meta, StoryObj } from '@storybook/react';

import ContrastOutlined from '../../lib/image/ContrastOutlined';

const meta: Meta<typeof ContrastOutlined> = {
  component: ContrastOutlined,
  tags: ['autodocs'],
  title: 'image/ContrastOutlined',
};

export default meta;
type Story = StoryObj<typeof ContrastOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
