import type { Meta, StoryObj } from '@storybook/react';

import EmojiFlagsOutlined from '../../lib/social/EmojiFlagsOutlined';

const meta: Meta<typeof EmojiFlagsOutlined> = {
  component: EmojiFlagsOutlined,
  tags: ['autodocs'],
  title: 'social/EmojiFlagsOutlined',
};

export default meta;
type Story = StoryObj<typeof EmojiFlagsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
