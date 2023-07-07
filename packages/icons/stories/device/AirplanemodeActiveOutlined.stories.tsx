import type { Meta, StoryObj } from '@storybook/react';

import AirplanemodeActiveOutlined from '../../lib/device/AirplanemodeActiveOutlined';

const meta: Meta<typeof AirplanemodeActiveOutlined> = {
  component: AirplanemodeActiveOutlined,
  tags: ['autodocs'],
  title: 'device/AirplanemodeActiveOutlined',
};

export default meta;
type Story = StoryObj<typeof AirplanemodeActiveOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
