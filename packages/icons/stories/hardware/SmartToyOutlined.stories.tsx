import type { Meta, StoryObj } from '@storybook/react';

import SmartToyOutlined from '../../lib/hardware/SmartToyOutlined';

const meta: Meta<typeof SmartToyOutlined> = {
  component: SmartToyOutlined,
  tags: ['autodocs'],
  title: 'hardware/SmartToyOutlined',
};

export default meta;
type Story = StoryObj<typeof SmartToyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
