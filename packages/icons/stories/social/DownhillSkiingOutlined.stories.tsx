import type { Meta, StoryObj } from '@storybook/react';

import DownhillSkiingOutlined from '../../lib/social/DownhillSkiingOutlined';

const meta: Meta<typeof DownhillSkiingOutlined> = {
  component: DownhillSkiingOutlined,
  tags: ['autodocs'],
  title: 'social/DownhillSkiingOutlined',
};

export default meta;
type Story = StoryObj<typeof DownhillSkiingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
