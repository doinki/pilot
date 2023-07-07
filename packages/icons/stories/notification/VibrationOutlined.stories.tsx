import type { Meta, StoryObj } from '@storybook/react';

import VibrationOutlined from '../../lib/notification/VibrationOutlined';

const meta: Meta<typeof VibrationOutlined> = {
  component: VibrationOutlined,
  tags: ['autodocs'],
  title: 'notification/VibrationOutlined',
};

export default meta;
type Story = StoryObj<typeof VibrationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
