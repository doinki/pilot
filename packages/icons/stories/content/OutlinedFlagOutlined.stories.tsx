import type { Meta, StoryObj } from '@storybook/react';

import OutlinedFlagOutlined from '../../lib/content/OutlinedFlagOutlined';

const meta: Meta<typeof OutlinedFlagOutlined> = {
  component: OutlinedFlagOutlined,
  tags: ['autodocs'],
  title: 'content/OutlinedFlagOutlined',
};

export default meta;
type Story = StoryObj<typeof OutlinedFlagOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
