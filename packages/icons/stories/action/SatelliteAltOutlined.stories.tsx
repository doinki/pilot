import type { Meta, StoryObj } from '@storybook/react';

import SatelliteAltOutlined from '../../lib/action/SatelliteAltOutlined';

const meta: Meta<typeof SatelliteAltOutlined> = {
  component: SatelliteAltOutlined,
  tags: ['autodocs'],
  title: 'action/SatelliteAltOutlined',
};

export default meta;
type Story = StoryObj<typeof SatelliteAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
