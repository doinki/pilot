import type { Meta, StoryObj } from '@storybook/react';

import PixOutlined from '../../lib/social/PixOutlined';

const meta: Meta<typeof PixOutlined> = {
  component: PixOutlined,
  tags: ['autodocs'],
  title: 'social/PixOutlined',
};

export default meta;
type Story = StoryObj<typeof PixOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
