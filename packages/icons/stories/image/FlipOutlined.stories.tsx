import type { Meta, StoryObj } from '@storybook/react';

import FlipOutlined from '../../lib/image/FlipOutlined';

const meta: Meta<typeof FlipOutlined> = {
  component: FlipOutlined,
  tags: ['autodocs'],
  title: 'image/FlipOutlined',
};

export default meta;
type Story = StoryObj<typeof FlipOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
