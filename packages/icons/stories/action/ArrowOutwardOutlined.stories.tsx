import type { Meta, StoryObj } from '@storybook/react';

import ArrowOutwardOutlined from '../../lib/action/ArrowOutwardOutlined';

const meta: Meta<typeof ArrowOutwardOutlined> = {
  component: ArrowOutwardOutlined,
  tags: ['autodocs'],
  title: 'action/ArrowOutwardOutlined',
};

export default meta;
type Story = StoryObj<typeof ArrowOutwardOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
