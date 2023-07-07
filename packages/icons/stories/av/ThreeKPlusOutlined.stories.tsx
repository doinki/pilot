import type { Meta, StoryObj } from '@storybook/react';

import ThreeKPlusOutlined from '../../lib/av/ThreeKPlusOutlined';

const meta: Meta<typeof ThreeKPlusOutlined> = {
  component: ThreeKPlusOutlined,
  tags: ['autodocs'],
  title: 'av/ThreeKPlusOutlined',
};

export default meta;
type Story = StoryObj<typeof ThreeKPlusOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
