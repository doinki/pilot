import type { Meta, StoryObj } from '@storybook/react';

import TwoKOutlined from '../../lib/av/TwoKOutlined';

const meta: Meta<typeof TwoKOutlined> = {
  component: TwoKOutlined,
  tags: ['autodocs'],
  title: 'av/TwoKOutlined',
};

export default meta;
type Story = StoryObj<typeof TwoKOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
