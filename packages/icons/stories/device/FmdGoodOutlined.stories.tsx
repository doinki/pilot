import type { Meta, StoryObj } from '@storybook/react';

import FmdGoodOutlined from '../../lib/device/FmdGoodOutlined';

const meta: Meta<typeof FmdGoodOutlined> = {
  component: FmdGoodOutlined,
  tags: ['autodocs'],
  title: 'device/FmdGoodOutlined',
};

export default meta;
type Story = StoryObj<typeof FmdGoodOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
