import type { Meta, StoryObj } from '@storybook/react';

import WifiTetheringErrorOutlined from '../../lib/device/WifiTetheringErrorOutlined';

const meta: Meta<typeof WifiTetheringErrorOutlined> = {
  component: WifiTetheringErrorOutlined,
  tags: ['autodocs'],
  title: 'device/WifiTetheringErrorOutlined',
};

export default meta;
type Story = StoryObj<typeof WifiTetheringErrorOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
