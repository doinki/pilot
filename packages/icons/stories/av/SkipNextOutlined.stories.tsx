import type { Meta, StoryObj } from '@storybook/react';

import SkipNextOutlined from '../../lib/av/SkipNextOutlined';

const meta: Meta<typeof SkipNextOutlined> = {
  component: SkipNextOutlined,
  tags: ['autodocs'],
  title: 'av/SkipNextOutlined',
};

export default meta;
type Story = StoryObj<typeof SkipNextOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
