import type { Meta, StoryObj } from '@storybook/react';

import ScaleOutlined from '../../lib/social/ScaleOutlined';

const meta: Meta<typeof ScaleOutlined> = {
  component: ScaleOutlined,
  tags: ['autodocs'],
  title: 'social/ScaleOutlined',
};

export default meta;
type Story = StoryObj<typeof ScaleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
