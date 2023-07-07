import type { Meta, StoryObj } from '@storybook/react';

import ScreenShareOutlined from '../../lib/communication/ScreenShareOutlined';

const meta: Meta<typeof ScreenShareOutlined> = {
  component: ScreenShareOutlined,
  tags: ['autodocs'],
  title: 'communication/ScreenShareOutlined',
};

export default meta;
type Story = StoryObj<typeof ScreenShareOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
