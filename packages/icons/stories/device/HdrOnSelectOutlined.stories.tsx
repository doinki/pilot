import type { Meta, StoryObj } from '@storybook/react';

import HdrOnSelectOutlined from '../../lib/device/HdrOnSelectOutlined';

const meta: Meta<typeof HdrOnSelectOutlined> = {
  component: HdrOnSelectOutlined,
  tags: ['autodocs'],
  title: 'device/HdrOnSelectOutlined',
};

export default meta;
type Story = StoryObj<typeof HdrOnSelectOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
