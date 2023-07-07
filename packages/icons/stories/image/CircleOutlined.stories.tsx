import type { Meta, StoryObj } from '@storybook/react';

import CircleOutlined from '../../lib/image/CircleOutlined';

const meta: Meta<typeof CircleOutlined> = {
  component: CircleOutlined,
  tags: ['autodocs'],
  title: 'image/CircleOutlined',
};

export default meta;
type Story = StoryObj<typeof CircleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
