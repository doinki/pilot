import type { Meta, StoryObj } from '@storybook/react';

import LocalTaxiOutlined from '../../lib/maps/LocalTaxiOutlined';

const meta: Meta<typeof LocalTaxiOutlined> = {
  component: LocalTaxiOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalTaxiOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalTaxiOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
