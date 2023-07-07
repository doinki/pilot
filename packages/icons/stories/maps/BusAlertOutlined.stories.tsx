import type { Meta, StoryObj } from '@storybook/react';

import BusAlertOutlined from '../../lib/maps/BusAlertOutlined';

const meta: Meta<typeof BusAlertOutlined> = {
  component: BusAlertOutlined,
  tags: ['autodocs'],
  title: 'maps/BusAlertOutlined',
};

export default meta;
type Story = StoryObj<typeof BusAlertOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
