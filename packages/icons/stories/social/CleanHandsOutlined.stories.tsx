import type { Meta, StoryObj } from '@storybook/react';

import CleanHandsOutlined from '../../lib/social/CleanHandsOutlined';

const meta: Meta<typeof CleanHandsOutlined> = {
  component: CleanHandsOutlined,
  tags: ['autodocs'],
  title: 'social/CleanHandsOutlined',
};

export default meta;
type Story = StoryObj<typeof CleanHandsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
