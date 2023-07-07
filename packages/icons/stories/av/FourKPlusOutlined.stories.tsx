import type { Meta, StoryObj } from '@storybook/react';

import FourKPlusOutlined from '../../lib/av/FourKPlusOutlined';

const meta: Meta<typeof FourKPlusOutlined> = {
  component: FourKPlusOutlined,
  tags: ['autodocs'],
  title: 'av/FourKPlusOutlined',
};

export default meta;
type Story = StoryObj<typeof FourKPlusOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
