import type { Meta, StoryObj } from '@storybook/react';

import NineKOutlined from '../../lib/av/NineKOutlined';

const meta: Meta<typeof NineKOutlined> = {
  component: NineKOutlined,
  tags: ['autodocs'],
  title: 'av/NineKOutlined',
};

export default meta;
type Story = StoryObj<typeof NineKOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
