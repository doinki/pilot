import type { Meta, StoryObj } from '@storybook/react';

import FiveKOutlined from '../../lib/av/FiveKOutlined';

const meta: Meta<typeof FiveKOutlined> = {
  component: FiveKOutlined,
  tags: ['autodocs'],
  title: 'av/FiveKOutlined',
};

export default meta;
type Story = StoryObj<typeof FiveKOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
