import type { Meta, StoryObj } from '@storybook/react';

import DirectionsOffOutlined from '../../lib/notification/DirectionsOffOutlined';

const meta: Meta<typeof DirectionsOffOutlined> = {
  component: DirectionsOffOutlined,
  tags: ['autodocs'],
  title: 'notification/DirectionsOffOutlined',
};

export default meta;
type Story = StoryObj<typeof DirectionsOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
