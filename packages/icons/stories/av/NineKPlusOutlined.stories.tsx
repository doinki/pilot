import type { Meta, StoryObj } from '@storybook/react';

import NineKPlusOutlined from '../../lib/av/NineKPlusOutlined';

const meta: Meta<typeof NineKPlusOutlined> = {
  component: NineKPlusOutlined,
  tags: ['autodocs'],
  title: 'av/NineKPlusOutlined',
};

export default meta;
type Story = StoryObj<typeof NineKPlusOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
