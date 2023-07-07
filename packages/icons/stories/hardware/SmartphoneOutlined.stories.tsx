import type { Meta, StoryObj } from '@storybook/react';

import SmartphoneOutlined from '../../lib/hardware/SmartphoneOutlined';

const meta: Meta<typeof SmartphoneOutlined> = {
  component: SmartphoneOutlined,
  tags: ['autodocs'],
  title: 'hardware/SmartphoneOutlined',
};

export default meta;
type Story = StoryObj<typeof SmartphoneOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
