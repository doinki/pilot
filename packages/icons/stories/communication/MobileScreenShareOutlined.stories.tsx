import type { Meta, StoryObj } from '@storybook/react';

import MobileScreenShareOutlined from '../../lib/communication/MobileScreenShareOutlined';

const meta: Meta<typeof MobileScreenShareOutlined> = {
  component: MobileScreenShareOutlined,
  tags: ['autodocs'],
  title: 'communication/MobileScreenShareOutlined',
};

export default meta;
type Story = StoryObj<typeof MobileScreenShareOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
