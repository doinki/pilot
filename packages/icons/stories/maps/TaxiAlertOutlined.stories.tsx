import type { Meta, StoryObj } from '@storybook/react';

import TaxiAlertOutlined from '../../lib/maps/TaxiAlertOutlined';

const meta: Meta<typeof TaxiAlertOutlined> = {
  component: TaxiAlertOutlined,
  tags: ['autodocs'],
  title: 'maps/TaxiAlertOutlined',
};

export default meta;
type Story = StoryObj<typeof TaxiAlertOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
