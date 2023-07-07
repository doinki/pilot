import type { Meta, StoryObj } from '@storybook/react';

import SquareFootOutlined from '../../lib/content/SquareFootOutlined';

const meta: Meta<typeof SquareFootOutlined> = {
  component: SquareFootOutlined,
  tags: ['autodocs'],
  title: 'content/SquareFootOutlined',
};

export default meta;
type Story = StoryObj<typeof SquareFootOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
