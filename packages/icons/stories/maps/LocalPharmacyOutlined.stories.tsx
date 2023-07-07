import type { Meta, StoryObj } from '@storybook/react';

import LocalPharmacyOutlined from '../../lib/maps/LocalPharmacyOutlined';

const meta: Meta<typeof LocalPharmacyOutlined> = {
  component: LocalPharmacyOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalPharmacyOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalPharmacyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
