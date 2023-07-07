import type { Meta, StoryObj } from '@storybook/react';

import SnowmobileOutlined from '../../lib/maps/SnowmobileOutlined';

const meta: Meta<typeof SnowmobileOutlined> = {
  component: SnowmobileOutlined,
  tags: ['autodocs'],
  title: 'maps/SnowmobileOutlined',
};

export default meta;
type Story = StoryObj<typeof SnowmobileOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
