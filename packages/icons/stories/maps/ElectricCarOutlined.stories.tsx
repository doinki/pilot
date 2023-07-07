import type { Meta, StoryObj } from '@storybook/react';

import ElectricCarOutlined from '../../lib/maps/ElectricCarOutlined';

const meta: Meta<typeof ElectricCarOutlined> = {
  component: ElectricCarOutlined,
  tags: ['autodocs'],
  title: 'maps/ElectricCarOutlined',
};

export default meta;
type Story = StoryObj<typeof ElectricCarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
