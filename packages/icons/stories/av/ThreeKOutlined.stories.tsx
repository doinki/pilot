import type { Meta, StoryObj } from '@storybook/react';

import ThreeKOutlined from '../../lib/av/ThreeKOutlined';

const meta: Meta<typeof ThreeKOutlined> = {
  component: ThreeKOutlined,
  tags: ['autodocs'],
  title: 'av/ThreeKOutlined',
};

export default meta;
type Story = StoryObj<typeof ThreeKOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
