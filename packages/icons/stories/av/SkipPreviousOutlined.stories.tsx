import type { Meta, StoryObj } from '@storybook/react';

import SkipPreviousOutlined from '../../lib/av/SkipPreviousOutlined';

const meta: Meta<typeof SkipPreviousOutlined> = {
  component: SkipPreviousOutlined,
  tags: ['autodocs'],
  title: 'av/SkipPreviousOutlined',
};

export default meta;
type Story = StoryObj<typeof SkipPreviousOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
