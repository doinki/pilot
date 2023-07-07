import type { Meta, StoryObj } from '@storybook/react';

import EightKPlusOutlined from '../../lib/av/EightKPlusOutlined';

const meta: Meta<typeof EightKPlusOutlined> = {
  component: EightKPlusOutlined,
  tags: ['autodocs'],
  title: 'av/EightKPlusOutlined',
};

export default meta;
type Story = StoryObj<typeof EightKPlusOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
