import type { Meta, StoryObj } from '@storybook/react';

import WifiTetheringErrorRoundedOutlined from '../../lib/device/WifiTetheringErrorRoundedOutlined';

const meta: Meta<typeof WifiTetheringErrorRoundedOutlined> = {
  component: WifiTetheringErrorRoundedOutlined,
  tags: ['autodocs'],
  title: 'device/WifiTetheringErrorRoundedOutlined',
};

export default meta;
type Story = StoryObj<typeof WifiTetheringErrorRoundedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
