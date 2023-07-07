import type { Meta, StoryObj } from '@storybook/react';

import FiberNewOutlined from '../../lib/av/FiberNewOutlined';

const meta: Meta<typeof FiberNewOutlined> = {
  component: FiberNewOutlined,
  tags: ['autodocs'],
  title: 'av/FiberNewOutlined',
};

export default meta;
type Story = StoryObj<typeof FiberNewOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
