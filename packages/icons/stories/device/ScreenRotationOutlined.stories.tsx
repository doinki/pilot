import type { Meta, StoryObj } from '@storybook/react';

import ScreenRotationOutlined from '../../lib/device/ScreenRotationOutlined';

const meta: Meta<typeof ScreenRotationOutlined> = {
  component: ScreenRotationOutlined,
  tags: ['autodocs'],
  title: 'device/ScreenRotationOutlined',
};

export default meta;
type Story = StoryObj<typeof ScreenRotationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
