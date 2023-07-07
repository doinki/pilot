import type { Meta, StoryObj } from '@storybook/react';

import AirplanemodeInactiveOutlined from '../../lib/device/AirplanemodeInactiveOutlined';

const meta: Meta<typeof AirplanemodeInactiveOutlined> = {
  component: AirplanemodeInactiveOutlined,
  tags: ['autodocs'],
  title: 'device/AirplanemodeInactiveOutlined',
};

export default meta;
type Story = StoryObj<typeof AirplanemodeInactiveOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
