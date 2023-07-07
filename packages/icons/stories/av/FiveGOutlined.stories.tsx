import type { Meta, StoryObj } from '@storybook/react';

import FiveGOutlined from '../../lib/av/FiveGOutlined';

const meta: Meta<typeof FiveGOutlined> = {
  component: FiveGOutlined,
  tags: ['autodocs'],
  title: 'av/FiveGOutlined',
};

export default meta;
type Story = StoryObj<typeof FiveGOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
