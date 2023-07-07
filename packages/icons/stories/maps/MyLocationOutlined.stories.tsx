import type { Meta, StoryObj } from '@storybook/react';

import MyLocationOutlined from '../../lib/maps/MyLocationOutlined';

const meta: Meta<typeof MyLocationOutlined> = {
  component: MyLocationOutlined,
  tags: ['autodocs'],
  title: 'maps/MyLocationOutlined',
};

export default meta;
type Story = StoryObj<typeof MyLocationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
