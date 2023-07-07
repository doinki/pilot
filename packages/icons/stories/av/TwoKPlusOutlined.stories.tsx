import type { Meta, StoryObj } from '@storybook/react';

import TwoKPlusOutlined from '../../lib/av/TwoKPlusOutlined';

const meta: Meta<typeof TwoKPlusOutlined> = {
  component: TwoKPlusOutlined,
  tags: ['autodocs'],
  title: 'av/TwoKPlusOutlined',
};

export default meta;
type Story = StoryObj<typeof TwoKPlusOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
