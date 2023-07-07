import type { Meta, StoryObj } from '@storybook/react';

import WaterDamageOutlined from '../../lib/places/WaterDamageOutlined';

const meta: Meta<typeof WaterDamageOutlined> = {
  component: WaterDamageOutlined,
  tags: ['autodocs'],
  title: 'places/WaterDamageOutlined',
};

export default meta;
type Story = StoryObj<typeof WaterDamageOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
