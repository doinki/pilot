import type { Meta, StoryObj } from '@storybook/react';

import CompassCalibrationOutlined from '../../lib/maps/CompassCalibrationOutlined';

const meta: Meta<typeof CompassCalibrationOutlined> = {
  component: CompassCalibrationOutlined,
  tags: ['autodocs'],
  title: 'maps/CompassCalibrationOutlined',
};

export default meta;
type Story = StoryObj<typeof CompassCalibrationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
