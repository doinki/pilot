import type { Meta, StoryObj } from '@storybook/react';

import ArrowDownwardOutlined from '../../lib/navigation/ArrowDownwardOutlined';

const meta: Meta<typeof ArrowDownwardOutlined> = {
  component: ArrowDownwardOutlined,
  tags: ['autodocs'],
  title: 'navigation/ArrowDownwardOutlined',
};

export default meta;
type Story = StoryObj<typeof ArrowDownwardOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
