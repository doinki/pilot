import type { Meta, StoryObj } from '@storybook/react';

import WifiTetheringOutlined from '../../lib/device/WifiTetheringOutlined';

const meta: Meta<typeof WifiTetheringOutlined> = {
  component: WifiTetheringOutlined,
  tags: ['autodocs'],
  title: 'device/WifiTetheringOutlined',
};

export default meta;
type Story = StoryObj<typeof WifiTetheringOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
