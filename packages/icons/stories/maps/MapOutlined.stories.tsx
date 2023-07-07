import type { Meta, StoryObj } from '@storybook/react';

import MapOutlined from '../../lib/maps/MapOutlined';

const meta: Meta<typeof MapOutlined> = {
  component: MapOutlined,
  tags: ['autodocs'],
  title: 'maps/MapOutlined',
};

export default meta;
type Story = StoryObj<typeof MapOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
