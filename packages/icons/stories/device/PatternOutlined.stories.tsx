import type { Meta, StoryObj } from '@storybook/react';

import PatternOutlined from '../../lib/device/PatternOutlined';

const meta: Meta<typeof PatternOutlined> = {
  component: PatternOutlined,
  tags: ['autodocs'],
  title: 'device/PatternOutlined',
};

export default meta;
type Story = StoryObj<typeof PatternOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
