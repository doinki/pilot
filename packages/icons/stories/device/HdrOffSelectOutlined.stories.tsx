import type { Meta, StoryObj } from '@storybook/react';

import HdrOffSelectOutlined from '../../lib/device/HdrOffSelectOutlined';

const meta: Meta<typeof HdrOffSelectOutlined> = {
  component: HdrOffSelectOutlined,
  tags: ['autodocs'],
  title: 'device/HdrOffSelectOutlined',
};

export default meta;
type Story = StoryObj<typeof HdrOffSelectOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
