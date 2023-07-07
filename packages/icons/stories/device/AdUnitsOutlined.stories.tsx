import type { Meta, StoryObj } from '@storybook/react';

import AdUnitsOutlined from '../../lib/device/AdUnitsOutlined';

const meta: Meta<typeof AdUnitsOutlined> = {
  component: AdUnitsOutlined,
  tags: ['autodocs'],
  title: 'device/AdUnitsOutlined',
};

export default meta;
type Story = StoryObj<typeof AdUnitsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
