import type { Meta, StoryObj } from '@storybook/react';

import HourglassBottomOutlined from '../../lib/communication/HourglassBottomOutlined';

const meta: Meta<typeof HourglassBottomOutlined> = {
  component: HourglassBottomOutlined,
  tags: ['autodocs'],
  title: 'communication/HourglassBottomOutlined',
};

export default meta;
type Story = StoryObj<typeof HourglassBottomOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
