import type { Meta, StoryObj } from '@storybook/react';

import FiveKPlusOutlined from '../../lib/av/FiveKPlusOutlined';

const meta: Meta<typeof FiveKPlusOutlined> = {
  component: FiveKPlusOutlined,
  tags: ['autodocs'],
  title: 'av/FiveKPlusOutlined',
};

export default meta;
type Story = StoryObj<typeof FiveKPlusOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
