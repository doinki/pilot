import type { Meta, StoryObj } from '@storybook/react';

import ArrowForwardOutlined from '../../lib/navigation/ArrowForwardOutlined';

const meta: Meta<typeof ArrowForwardOutlined> = {
  component: ArrowForwardOutlined,
  tags: ['autodocs'],
  title: 'navigation/ArrowForwardOutlined',
};

export default meta;
type Story = StoryObj<typeof ArrowForwardOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
