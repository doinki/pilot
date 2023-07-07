import type { Meta, StoryObj } from '@storybook/react';

import RailwayAlertOutlined from '../../lib/maps/RailwayAlertOutlined';

const meta: Meta<typeof RailwayAlertOutlined> = {
  component: RailwayAlertOutlined,
  tags: ['autodocs'],
  title: 'maps/RailwayAlertOutlined',
};

export default meta;
type Story = StoryObj<typeof RailwayAlertOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
