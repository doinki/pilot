import type { Meta, StoryObj } from '@storybook/react';

import AirOutlined from '../../lib/device/AirOutlined';

const meta: Meta<typeof AirOutlined> = {
  component: AirOutlined,
  tags: ['autodocs'],
  title: 'device/AirOutlined',
};

export default meta;
type Story = StoryObj<typeof AirOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
