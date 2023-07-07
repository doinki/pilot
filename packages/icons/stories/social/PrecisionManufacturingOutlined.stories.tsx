import type { Meta, StoryObj } from '@storybook/react';

import PrecisionManufacturingOutlined from '../../lib/social/PrecisionManufacturingOutlined';

const meta: Meta<typeof PrecisionManufacturingOutlined> = {
  component: PrecisionManufacturingOutlined,
  tags: ['autodocs'],
  title: 'social/PrecisionManufacturingOutlined',
};

export default meta;
type Story = StoryObj<typeof PrecisionManufacturingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
