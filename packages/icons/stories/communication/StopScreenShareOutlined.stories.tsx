import type { Meta, StoryObj } from '@storybook/react';

import StopScreenShareOutlined from '../../lib/communication/StopScreenShareOutlined';

const meta: Meta<typeof StopScreenShareOutlined> = {
  component: StopScreenShareOutlined,
  tags: ['autodocs'],
  title: 'communication/StopScreenShareOutlined',
};

export default meta;
type Story = StoryObj<typeof StopScreenShareOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
