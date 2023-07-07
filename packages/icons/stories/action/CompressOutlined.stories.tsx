import type { Meta, StoryObj } from '@storybook/react';

import CompressOutlined from '../../lib/action/CompressOutlined';

const meta: Meta<typeof CompressOutlined> = {
  component: CompressOutlined,
  tags: ['autodocs'],
  title: 'action/CompressOutlined',
};

export default meta;
type Story = StoryObj<typeof CompressOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
