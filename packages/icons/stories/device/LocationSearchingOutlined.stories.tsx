import type { Meta, StoryObj } from '@storybook/react';

import LocationSearchingOutlined from '../../lib/device/LocationSearchingOutlined';

const meta: Meta<typeof LocationSearchingOutlined> = {
  component: LocationSearchingOutlined,
  tags: ['autodocs'],
  title: 'device/LocationSearchingOutlined',
};

export default meta;
type Story = StoryObj<typeof LocationSearchingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
