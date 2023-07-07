import type { Meta, StoryObj } from '@storybook/react';

import WifiTetheringOffOutlined from '../../lib/device/WifiTetheringOffOutlined';

const meta: Meta<typeof WifiTetheringOffOutlined> = {
  component: WifiTetheringOffOutlined,
  tags: ['autodocs'],
  title: 'device/WifiTetheringOffOutlined',
};

export default meta;
type Story = StoryObj<typeof WifiTetheringOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
