import type { Meta, StoryObj } from '@storybook/react';

import HourglassTopOutlined from '../../lib/communication/HourglassTopOutlined';

const meta: Meta<typeof HourglassTopOutlined> = {
  component: HourglassTopOutlined,
  tags: ['autodocs'],
  title: 'communication/HourglassTopOutlined',
};

export default meta;
type Story = StoryObj<typeof HourglassTopOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
