import type { Meta, StoryObj } from '@storybook/react';

import SdOutlined from '../../lib/av/SdOutlined';

const meta: Meta<typeof SdOutlined> = {
  component: SdOutlined,
  tags: ['autodocs'],
  title: 'av/SdOutlined',
};

export default meta;
type Story = StoryObj<typeof SdOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
