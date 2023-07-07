import type { Meta, StoryObj } from '@storybook/react';

import HomeRepairServiceOutlined from '../../lib/maps/HomeRepairServiceOutlined';

const meta: Meta<typeof HomeRepairServiceOutlined> = {
  component: HomeRepairServiceOutlined,
  tags: ['autodocs'],
  title: 'maps/HomeRepairServiceOutlined',
};

export default meta;
type Story = StoryObj<typeof HomeRepairServiceOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
