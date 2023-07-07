import type { Meta, StoryObj } from '@storybook/react';

import NotInterestedOutlined from '../../lib/av/NotInterestedOutlined';

const meta: Meta<typeof NotInterestedOutlined> = {
  component: NotInterestedOutlined,
  tags: ['autodocs'],
  title: 'av/NotInterestedOutlined',
};

export default meta;
type Story = StoryObj<typeof NotInterestedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
