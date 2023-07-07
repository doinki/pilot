import type { Meta, StoryObj } from '@storybook/react';

import GpsNotFixedOutlined from '../../lib/device/GpsNotFixedOutlined';

const meta: Meta<typeof GpsNotFixedOutlined> = {
  component: GpsNotFixedOutlined,
  tags: ['autodocs'],
  title: 'device/GpsNotFixedOutlined',
};

export default meta;
type Story = StoryObj<typeof GpsNotFixedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
