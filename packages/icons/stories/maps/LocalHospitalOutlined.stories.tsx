import type { Meta, StoryObj } from '@storybook/react';

import LocalHospitalOutlined from '../../lib/maps/LocalHospitalOutlined';

const meta: Meta<typeof LocalHospitalOutlined> = {
  component: LocalHospitalOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalHospitalOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalHospitalOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
