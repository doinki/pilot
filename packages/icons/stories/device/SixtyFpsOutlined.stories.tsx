import type { Meta, StoryObj } from '@storybook/react';

import SixtyFpsOutlined from '../../lib/device/SixtyFpsOutlined';

const meta: Meta<typeof SixtyFpsOutlined> = {
  component: SixtyFpsOutlined,
  tags: ['autodocs'],
  title: 'device/SixtyFpsOutlined',
};

export default meta;
type Story = StoryObj<typeof SixtyFpsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
