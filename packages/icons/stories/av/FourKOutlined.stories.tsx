import type { Meta, StoryObj } from '@storybook/react';

import FourKOutlined from '../../lib/av/FourKOutlined';

const meta: Meta<typeof FourKOutlined> = {
  component: FourKOutlined,
  tags: ['autodocs'],
  title: 'av/FourKOutlined',
};

export default meta;
type Story = StoryObj<typeof FourKOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
